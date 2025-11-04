import rec from "./assets/rec2.jpeg";
import rec1 from "./assets/rec.jpeg";
import "./style.css"
function Main(){

    return(
<>
        <main>
            <section id="recommended-courses">
          <h2>Recommended Courses</h2>
         <div class="course-grid">
        <div class="course-card">
       <img src={rec} alt="Course Image"/>
        <h3>Course Title</h3>
         <p>Instructor Name</p>
         <p>₹499</p>
       </div>
     </div>
     </section>
            
            <section id="recommended-topics">
         <h2>Suggest a Topic</h2>
        <input type="text" placeholder="Enter a topic you're interested in"/>
        </section>

            <section id="popular-courses">
            <h2>Popular Courses</h2>
            <div class="course-grid">
                 <div class="course-card">
                 <img src={rec1} alt="Course Image"/>
                    <h3>Course Title</h3>
                    <p>4.8 (2,345 reviews)</p>
                     <p>₹799</p>
                        </div>
                    
                        </div>
                        </section>

        </main>
</>


    )
}
export default Main