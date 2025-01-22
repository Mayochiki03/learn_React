import { Star } from 'lucide-react';

// TODO: Import Book Interface
import Book from '../utils/Book';

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
        src= {book.coverUrl}
        alt={book.title}
        className="w-full h-80 object-cover rounded-t-lg mb-4"
      />
      <h2 className="font-semibold mb-2">{book.title.length>25 ?   `${book.title.substring(0,25)}... `: book.title }</h2>
      <p className="text-gray-700 mb-1">โดย {book.author}</p>
      <div className="mb-2">
        {Rating(book.rating)}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-blue-600 font-medium">฿ {book.price}</span>
        <span className="text-gray-500 text-sm">{book.pages} หน้า</span>
      </div>
    </div>
  );
}

export default BookDetail;