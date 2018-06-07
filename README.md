# Client Folder

## React file Structure
![alt text](structure.png "file structure")
***why disabled TabCourseList ?***

---------

## DONE 
- แก้บัคปุ่มชั้นปี ภาคเรียน
- Set วันให้ตรง
- เช็ควิชาเรียน 2 วัน
- เช็คหน่วยกิตไม่เกิน 21
- วิชาเรียนก่อนหน้า (prerequisite)
- ใส่สีตามวัน ให้ดูง่าย
- แก้บัค ```หลังเช็ค prerequisite เสร็จแล้ว ถึงแม้จะถูก และไม่ขึ้นใน calendar แต่ปุ่มยังถูก selected อยู่```

## NOT DONE
- Overlap วิชาที่ทับกัน
- Save button สำหรับเซฟตารางเรียน
- ต่อ API

## BUG
- หลังเช็ค prerequisite เสร็จแล้ว ถึงแม้จะถูก และไม่ขึ้นใน calendar แต่ปุ่มยังถูก selected อยู่

Test case | Expected | Actual
--- | --- | ---
คลิ๊กเลือก CS111<br>จากนั้นคลิ๊กเลือก CS213  | ขึ้น alert และ row CS213 ไม่ถูก select <br> แต่ row CS111 ยัง select เหมือนเดิม | ขึ้น alert และ row CS213 ไม่ถูก select <br> แต่ row CS111 __ไม่ถูก select__ เหมือนเดิม

---
- หลังจากที่ serach by course id แล้ว select จะเกิดบัคคือของจะถูกหยิบมาผิด เหมือนก่อนที่จะ serach
(น่าจะเพราะเรียงตามแถว จากฟังก์ชั่น _onRowSelection ที่เอาแถวที่เลือก(key)เป็น index ของวิชา)

Test case | Expected | Actual
--- | --- | ---
เสิร์ชว่า CS211 | กดเลือก CS211 แล้ว add event CS211 ใน Calendar | กดเลือก CS211 แล้ว add event __CS101__ ใน Calendar

---
- disabled ปุ่ม course list แบบที่เลือกตาม cs1xx cs2xx ออก เพราะคิดว่าไม่จำเป็น(เพราะมี serach แล้ว) และมีบัคเยอะ (ถ้าจะใช้ก็เอา disabled ออก อยู่ที่ไฟล์ TabSearchBy บรรทัดที่ 40, 45)

---
