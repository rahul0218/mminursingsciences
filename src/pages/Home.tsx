import { Link } from 'react-router-dom';
import { Cpu, Atom, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/Heroslider/IMG_15551-1024x589.jpg',
  '/images/Heroslider/BSc.jpg',
  '/images/Heroslider/GNM.jpg',
  '/images/Heroslider/IMG-20230805-WA0030-1024x461.jpg',
  '/images/Heroslider/Freshers12024-2025-1024x577.png',
  '/images/Heroslider/faculty-768x346.jpg'
];


const notices = [
  { day: '25', month: 'JUL', title: 'Mid-term Examination Schedule', description: 'The schedule for the upcoming mid-term examinations for all departments has been published.' },
  { day: '18', month: 'JUL', title: 'New Library Timings', description: 'The library will be operating under new extended hours starting from August 1st.' },
  { day: '15', month: 'JUL', title: 'Scholarship Application Deadline', description: 'Last date for submission of scholarship applications is July 31st.' },
];

const events = [
  { day: '05', month: 'AUG', title: 'Annual Health Fair 2025', description: 'Join us for a three-day celebration of health, wellness, and community service.' },
  { day: '12', month: 'AUG', title: 'Guest Lecture on AI in Healthcare', description: 'By renowned expert Dr. Arin Sharma in the main auditorium.' },
  { day: '20', month: 'SEP', title: 'Inter-College Sports Meet', description: 'Cheer for our athletes as they compete against top colleges in the region.' },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black">
          <img src={heroImages[currentSlide]} alt="MMINS Campus" className="w-full h-full object-cover opacity-60 transition-opacity duration-500" />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Innovate Your Future</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">Discover a place where knowledge meets opportunity and healthcare leaders are made.</p>
          <Link to="/courses" className="mt-8 inline-block bg-primary text-white text-base font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-transform hover:scale-105">
            Explore Programs
          </Link>
        </div>

        {/* Slider Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors">
          <ChevronRight />
        </button>

        {/* Slider Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="wow-image-wrapper">
            <img
                src="/images/hospital-1024x769.jpg"
                alt="Maheshtala Municipal Institute of Nursing Sciences Hospital"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-rich-black tracking-tight">Welcome</h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-primary mt-2">Maheshtala Municipal Institute Of Nursing Sciences</h3>
            <p className="text-lg text-dark-blue font-medium mt-2">affiliated by Indian Nursing Council</p>
            <p className="mt-4 text-base text-slate-gray leading-relaxed">
              is a brainchild of Mr. Dulal Das, Chairman Maheshtala Municipality & Dr. S N Sharma, Director, Kasturi Das Superspeciality hospital & Dishari Health point  plan to produce a  highly skilled nursing professionals  for the Healthcare sector.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm font-semibold text-dark-blue">"Owned by Maheshtala Municipality"</p>
              <p className="text-sm font-semibold text-dark-blue">"Operated by Dishari Health Point Pvt. Ltd."</p>
            </div>
            <Link to="/about" className="mt-6 inline-block bg-ghost-white text-dark-blue text-sm font-bold py-3 px-5 rounded-lg hover:bg-gray-200 transition-colors">
              See More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* About US Section */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-rich-black tracking-tight">About US</h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-gray">Discover our mission, vision, and commitment to excellence in nursing education</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-base text-slate-gray leading-relaxed mb-6">
                To produce highly skilled nursing professionals who are committed to providing compassionate,
                evidence-based healthcare services to the community while upholding the highest standards of
                professional ethics and practice.
              </p>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-base text-slate-gray leading-relaxed mb-6">
                To be a premier institute of nursing education that transforms healthcare through excellence
                in teaching, research, and community service, producing leaders who will shape the future
                of nursing practice.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-slate-gray">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-slate-gray">Expert Faculty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-slate-gray">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-slate-gray">Placement Rate</div>
                  <Link to="/about" className="mt-6 inline-block bg-ghost-white text-dark-blue text-sm font-bold py-3 px-5 rounded-lg hover:bg-gray-200 transition-colors">
              See More About Us
            </Link>
                </div>
              </div>
            </div>
            <div className="wow-image-wrapper">
              <img
                src="/images/IMG-20230807-WA0006-1024x768.jpg"
                alt="Maheshtala Municipal Institute of Nursing Sciences Hospital"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-black tracking-tight">Courses We Offer</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-gray">Explore our diverse range of programs designed to fuel your passion and shape your future.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-primary-light h-16 w-16 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-rich-black">B.Sc. Nursing</h3>
              <p className="mt-2 text-sm text-slate-gray">A comprehensive program to build the future of healthcare with cutting-edge nursing skills.</p>
              <p className="mt-3 text-sm font-semibold text-primary">Duration of the Course: 4 Years</p>
              <Link to="/courses" className="mt-4 inline-block text-primary font-bold text-sm">Know More &rarr;</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-primary-light h-16 w-16 rounded-full flex items-center justify-center mb-6">
                <Atom className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-rich-black">General Nursing & Midwifery(G.N.M)</h3>
              <p className="mt-2 text-sm text-slate-gray">Explore general nursing and midwifery to provide holistic patient care across diverse settings.</p>
              <p className="mt-3 text-sm font-semibold text-primary">Duration of the Course: 3 Years</p>
              <Link to="/courses" className="mt-4 inline-block text-primary font-bold text-sm">Know More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-black tracking-tight">Facilities Available for Students</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-gray">We provide comprehensive support and facilities to ensure our students' success</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
              <div className="bg-primary-light h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-rich-black text-center">Student Credit Card</h3>
              <p className="mt-2 text-sm text-slate-gray text-center">Financial support through student credit card facilities to help manage educational expenses</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
              <div className="bg-primary-light h-16 w-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-rich-black text-center">Scholarship Programs</h3>
              <p className="mt-2 text-sm text-slate-gray text-center">Available including</p>
              <ul className="mt-3 text-sm text-slate-gray space-y-1">
                <li>• Swami Vivekananda Scholarship</li>
                <li>• Aikyashree Scholarship</li>
                <li>• And other government scholarships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-rich-black tracking-tight">Meet Our Faculty</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-gray">Learn from distinguished scholars and industry experts dedicated to your success.</p>
          <div className="mt-12 flex justify-center">
            <img
              src="/images/IMG-20230807-WA0011-768x576.jpg"
              alt="Our Faculty Team"
              className="rounded-lg shadow-xl max-w-4xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Notices & Events Section */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-rich-black mb-8">Latest Notices</h2>
            <div className="space-y-6">
              {notices.map(item => (
                <div key={item.title} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 text-center bg-primary-light rounded-md p-3">
                    <p className="text-2xl font-bold text-primary">{item.day}</p>
                    <p className="text-xs font-semibold text-primary">{item.month}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-rich-black">{item.title}</h3>
                    <p className="text-sm text-slate-gray mt-1">{item.description}</p>
                    <a href="#" className="text-sm font-semibold text-primary mt-2 inline-block">Read More &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-rich-black mb-8">Latest Events</h2>
            <div className="space-y-6">
              {events.map(item => (
                <div key={item.title} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 text-center bg-primary-light rounded-md p-3">
                    <p className="text-2xl font-bold text-primary">{item.day}</p>
                    <p className="text-xs font-semibold text-primary">{item.month}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-rich-black">{item.title}</h3>
                    <p className="text-sm text-slate-gray mt-1">{item.description}</p>
                    <a href="#" className="text-sm font-semibold text-primary mt-2 inline-block">Learn More &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-rich-black tracking-tight">Gallery</h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-gray">A glimpse into life at MMINS.</p>
          </div>
          <div className="mt-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/fc98/f6a5/620bb51d64180ce4b9bd6dd330e8cd85?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g3yyW5~qCEn2qQN~GK9JF6MWUN3Um4oiM0hsOMIuHZebERUn~T82zIN3JnKGLsFXv2p-JrEJ9zVpQLqmkAEV8fOaNGj38h8VGUOazXqprU4eXLIgQhBCtEoQrIgF17wuftOIU4722T~745ZXN2MgxjwpRjL8SO9a~QBtpPcM2yhrOlrAh8C8XPbLbVUkb~jyWiIKWP5ntUwz6RPVpmriuVcKQHzpcjQIHGEBLv4tzT4YBbt6ENipK4emtYuWwFNVN6EYlyF5iyaXoNFbQoQUc4bp9a6EYHbSJndvh17-eON2aJ0Kfp7Hs-7RqMb4r1DZUrfIXeMJKxXnVW9i8cUHZA__" alt="Students in a lab" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <img src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/5dfb/3c0c/e24f8d5c981078f404c4030b00338ebf?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hToIUjI1JrGxzkvY-vKZydl39QfPoeADYh~TcC6e-NGvXuqwNb3bMy1yFwc1b1cLWN2LXBXj9dGmIMPVdw7l0r9mypPf3rCrUkW276aw76OMn4gOYypjBn~qUPVpP3tjRHkNt41DvylcVjMmUWFgd~n3bAQGUuEYd~m7o-Kk8ZWVnRsn9HwPnrgcezQ27qMx13E-LyiFOLdEJ-QmiH2mcLCF-yO57ipvVYIPqpB0kB4~t4J1xBh7IE3MhbvwuvcUMR33oBuKneDADqpaOTdOMT8F8p3jutThhIVhnIPKMtIc4tN594L1Xw1SE4WElrwOt3N1PlfUoxxbR5Vo4D-hvQ__" alt="Graduation ceremony" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <img src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/5b0d/3f0b/07f50745da86a13f0a1a42bbefd1564a?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q-~lUSBDX8MCka3CuYSHORtAr5o3dVCXD9ZbN5rl~1CpB~jt7t2f6wjqm8tukn1GoYCn1t2f5Lx37M7SoUMXBwQCjXObR3I46glJHhqGaE7oSX3mw9EpFjTTfhan4fVFW2iKZm5TCm1ltntfEh3Py0iTqIiV6puzsOUtFOSOjn8mMpUonkrI3Sl50IorX0EFe-LBfxp1U0jAn60kes82XoVVHahctoDAhnnaU4e45exObfqrcQD7fYvdaptR6UGXi7Eo-nvxrfTlxIxNinKI9TK35mHXnlf~IGKPF7W75uhaWHBKAe3dQV0AmxiKfgARHj6hO31dorv8whU~0wbXaA__" alt="Students in library" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
            <button className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"><ChevronLeft /></button>
            <button className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"><ChevronRight /></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
