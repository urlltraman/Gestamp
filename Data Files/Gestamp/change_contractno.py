import os
import openpyxl
from pathlib import Path

def process_excel_file(file_path):
    """
    แก้ไขข้อมูลในไฟล์ Excel: เปลี่ยน T2- เป็น T3- ในคอลัมน์ contractNo
    """
    try:
        # โหลดไฟล์ Excel
        wb = openpyxl.load_workbook(file_path)
        
        # เลือก sheet แรก (หรือจะระบุชื่อ sheet ที่ต้องการก็ได้)
        sheet = wb.active
        
        # ค้นหาคอลัมน์ contractNo (สมมติว่าอยู่ในแถวแรก)
        contract_no_column = None
        for col in range(1, sheet.max_column + 1):
            cell_value = sheet.cell(row=1, column=col).value
            if cell_value and str(cell_value).strip().lower() == 'contractno':
                contract_no_column = col
                break
        
        if contract_no_column is None:
            print(f"ไม่พบคอลัมน์ contractNo ในไฟล์ {file_path}")
            wb.close()
            return False
        
        # แก้ไขข้อมูลในคอลัมน์ contractNo (เริ่มจากแถวที่ 2 เนื่องจากแถว 1 เป็นหัวข้อ)
        modified = False
        for row in range(2, sheet.max_row + 1):
            cell = sheet.cell(row=row, column=contract_no_column)
            if cell.value and isinstance(cell.value, str):
                original_value = cell.value
                if original_value.startswith('T16'):
                    new_value = 'T20' + original_value[3:]
                    cell.value = new_value
                    modified = True
                    print(f"เปลี่ยน {original_value} เป็น {new_value} ในไฟล์ {file_path}")
        
        # บันทึกไฟล์ถ้ามีการเปลี่ยนแปลง
        if modified:
            wb.save(file_path)
            print(f"บันทึกไฟล์ {file_path} เรียบร้อยแล้ว")
        else:
            print(f"ไม่พบข้อมูลที่ต้องเปลี่ยนในไฟล์ {file_path}")
        
        wb.close()
        return True
        
    except Exception as e:
        print(f"เกิดข้อผิดพลาดกับไฟล์ {file_path}: {str(e)}")
        return False

def process_folder(folder_path):
    """
    ประมวลผลไฟล์ Excel ทั้งหมดในโฟลเดอร์และโฟลเดอร์ย่อย
    """
    # นับจำนวนไฟล์ที่พบและแก้ไข
    total_files = 0
    modified_files = 0
    failed_files = 0
    
    # ใช้ Path().rglob() เพื่อหาไฟล์ Excel ทั้งหมดในโฟลเดอร์และโฟลเดอร์ย่อย
    folder = Path(folder_path)
    excel_files = list(folder.rglob('*.xlsx')) + list(folder.rglob('*.xls'))
    
    print(f"พบไฟล์ Excel ทั้งหมด {len(excel_files)} ไฟล์")
    
    for excel_file in excel_files:
        print(f"\nกำลังประมวลผลไฟล์: {excel_file}")
        total_files += 1
        
        if process_excel_file(excel_file):
            modified_files += 1
        else:
            failed_files += 1
    
    # สรุปผล
    print("\n" + "="*50)
    print("สรุปผลการทำงาน:")
    print(f"ไฟล์ทั้งหมดที่พบ: {total_files}")
    print(f"ไฟล์ที่แก้ไขสำเร็จ: {modified_files}")
    print(f"ไฟล์ที่ไม่สามารถแก้ไขได้: {failed_files}")
    print("="*50)

# ระบุ path ของโฟลเดอร์ใหญ่
main_folder = r"C:\Users\USER\Desktop\New folder (2)\Data Files\Gestamp"  # แก้ไขเป็น path ของโฟลเดอร์ใหญ่ของคุณ

# ตรวจสอบว่าโฟลเดอร์มีอยู่จริง
if os.path.exists(main_folder):
    process_folder(main_folder)
else:
    print(f"ไม่พบโฟลเดอร์: {main_folder}")