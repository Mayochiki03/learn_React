import { Star } from 'lucide-react';

// TODO: Import Book Interface


function Rating(rating: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      size={20}
      fill={index < rating ? '#FFD700' : '#E0E0E0'}
      className="inline-block mx-0.5"
    />
  ));
}


function BookDetail({ book }: { book: Book }) {

  const getColorByRating = (rating: number) => {
    return rating === 5
      ? 'bg-green-100'
      : 'bg-white';
  };

  // TODO: นำข้อมูลจาก book มาแสดงผลใน Component เช่น ชื่อหนังสือ ชื่อผู้แต่ง ราคา จำนวนหน้า และคะแนน

  return (
    <div  className={`border rounded-lg p-4 m-2 shadow-md hover:shadow-xl transition-shadow w-64 flex flex-col ${getColorByRating(book.rating)}`}>
      <img
        src="https://mp-static.se-ed.com/physical/cover/to35l6xefa680079jd4f/image/w0ibhw1u"
        alt="ชายไร้สีกับปีแสวงบุญ"
        className="w-full h-80 object-cover rounded-t-lg mb-4"
      />
      <h2 className="font-semibold mb-2">ชายไร้สีกับปีแสวงบุญ</h2>
      <p className="text-gray-700 mb-1">โดย Haruki Murakami</p>
      <div className="mb-2">
        {Rating(5)}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-blue-600 font-medium">฿ 320</span>
        <span className="text-gray-500 text-sm">300 หน้า</span>
      </div>
    </div>
  );
}

export default BookDetail;