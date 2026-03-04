import os
import glob
import pandas as pd
from openpyxl.utils.exceptions import InvalidFileException
from concurrent.futures import ProcessPoolExecutor

# ตั้งค่าพื้นฐาน
folder_path = r'C:\Users\USER\Desktop\New folder (2)\Data Files\Gestamp'
old_value = '2026-02-08'
new_value = '2026-03-04'

# ค้นหาไฟล์ .xlsx ทุกไฟล์ในทุกโฟลเดอร์ย่อย
excel_files = glob.glob(os.path.join(folder_path, '**', '*.xlsx'), recursive=True)
print(f'🔍 พบทั้งหมด {len(excel_files)} ไฟล์')

# ฟังก์ชันหลัก
def process_file(file):
    changed = False
    try:
        xl = pd.ExcelFile(file, engine='openpyxl')  # อ่านหลาย sheet
        writer = pd.ExcelWriter(file, engine='openpyxl', mode='a', if_sheet_exists='replace')  # เตรียมเขียนทับ

        for sheet_name in xl.sheet_names:
            try:
                df = xl.parse(sheet_name, dtype=str)  # อ่านเป็น string ทั้งหมด
                original_df = df.copy()

                # แทนค่า
                df = df.applymap(lambda x: x.replace(old_value, new_value) if isinstance(x, str) and old_value in x else x)

                if not df.equals(original_df):  # ถ้ามีการเปลี่ยน
                    df.to_excel(writer, sheet_name=sheet_name, index=False)
                    changed = True
            except Exception as e:
                print(f'⚠️ Sheet "{sheet_name}" ใน {file}: {e}')
        
        if changed:
            writer.close()
            print(f'✅ แก้ไขแล้ว: {file}')
        else:
            writer.close()
            print(f'❌ ไม่มีการเปลี่ยนแปลง: {file}')

    except InvalidFileException:
        print(f'⛔ ไฟล์ไม่สามารถอ่านได้ (อาจไม่ใช่ .xlsx แท้จริง): {file}')
    except Exception as e:
        print(f'❗ เกิดข้อผิดพลาดใน {file}: {e}')

# ประมวลผลแบบขนาน (เร็วกว่า)
if __name__ == '__main__':
    with ProcessPoolExecutor(max_workers=4) as executor:
        executor.map(process_file, excel_files)
