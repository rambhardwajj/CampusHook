import React from 'react'

const About = () => {
  return (
    <>
        <h1 className=' text-purple-400 text-center font-bold text-6xl'>About</h1>
        <div className="mx-auto max-w-6xl py-10 sm:py-10 lg:py-10 ">
          
          <div className="text-center">
           
            <p className=" text-lg leading-8 text-gray-600">
            At CampusHook, we believe that the college experience is not just about attending classes but about building meaningful connections within your campus community. Our web app is designed to enhance your college journey by providing a platform that fosters community engagement, interactive socials, and meaningful connections.
            </p>
            
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 mx-4 md:mx-8 lg:mx-16 xl:mx-32">
  {/* Row 1 */}
  <div className="flex items-center">
    <img
      className="max-w-full h-auto rounded-lg"
      src="src\images\one.png"
      alt="Image 1"
    />
  </div>
  <div className="flex items-center">
    <div>
    <h2 className="text-4xl font-bold text-black mt-4 mb-4    max-w-5xl:">Community Connection:</h2>
    <p className=" mt-2">
      Easily find and connect with fellow students, faculty, and staff members within your college community.
    </p>

    <p className=' mt-1'>Explore the diverse interests, talents, and perspectives that make your college experience unique.</p>
    </div>
    
  </div>

  {/* Row 2 */}
  <div className="flex items-center">
  <div>
    <h2 className="text-4xl font-bold text-black mt-4 mb-4    max-w-5xl:">College Interactive Socials:</h2>
    <p className=" mt-2">
    Stay informed about upcoming events, socials, and activities happening on your campus.
    </p>

    <p className=' mt-1'>Engage with your peers in real-time discussions, share experiences, and discover exciting opportunities within your college..</p>
    </div>
  </div>
  <div className="flex justify-center">
    <img
      className="max-w-full h-auto rounded-lg"
      src="src\images\two.png"
      alt="Image 2"
    />
  </div>

  {/* Row 3 */}
  <div className="flex justify-center">
    <img
      className="max-w-full h-auto rounded-lg"
      src="src\images\three.png"
      alt="Image 3"
    />
  </div>
  <div className="flex items-center">
    <div>
      <h2 className="text-4xl font-bold text-black mt-4 mb-4    max-w-3xl:">Arrange Meets:</h2>
      <p className=" mt-2">
      Take online connections to the next level by arranging in-person meets with other users.
      </p>

      <p className=' mt-1'>Whether it's for a study session, a casual coffee chat, or a collaborative project, CampusHook makes it easy to turn online connections into real-world relationships.</p>
      
    </div>
  </div>

  {/* Row 4 */}
  <div className="flex items-center">
  <div>
      <h2 className="text-4xl font-bold text-black mt-4 mb-4    max-w-3xl:">  Private Chat App:</h2>
      <p className=" mt-2">
      Enjoy one-on-one conversations with other users through our secure and user-friendly chat application.
      </p>

      <p className=' mt-1'>Share thoughts, collaborate on projects, or simply make new friends within the safety of our interactive platform..</p>
      
    </div>
  </div>
  <div className="flex justify-center">
    <img
      className="max-w-full h-auto rounded-lg"
      src="src\images\four.png"
      alt="Image 4"
    />
  </div>
</div>

        
    </>
  )
}

export default About