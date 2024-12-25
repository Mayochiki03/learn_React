// TODO: Import Book Interface
// TODO: Import Components ที่เกี่ยวข้องทั้งหมด

function BookList() {
    const books: Book[] = []
  
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">รายการหนังสือ</h1>
        <div className="flex flex-wrap justify-center items-start">
          {/* TODO: อ่านข้อมูลใน books เพื่อแสดงรายการหนังสือผ่าน BookDetail */}
        </div>
      </div>
    );
  };
  
  export default BookList;