// TODO: Import Components ที่เกี่ยวข้องทั้งหมด

import BookList from "./Components/BookList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";



function MainPage() {

    return (
      <div className="flex flex-col min-h-screen">
      
        {/* TODO: แสดง Header  */}
      <Header/>
        
        <main className="flex-grow container mx-auto px-4 py-6">
  
  
          {/* TODO: แสดง Welcome */}
          <Welcome/>
          <BookList/>
          
          {/* TODO: แสดง BookList */}
          
          
        </main>
        
        <Footer/>
        
      </div>
    );
  };
  
  export default MainPage;