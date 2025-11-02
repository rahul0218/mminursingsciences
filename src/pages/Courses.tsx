
const Courses = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-rich-black tracking-tight">LIST OF NURSING COURSES AFTER 12TH SCIENCE, ARTS AND COMMERCE - CHECK ELIGIBILITY, FEES & COLLEGES</h1>
      </div>

      {/* Course Details Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">Course Details</h2>
        
        {/* General Nursing & Midwifery Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-rich-black mb-6">General Nursing & Midwifery</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-dark-blue">Number of Seats : 60 Seats</p>
              <p className="text-lg font-semibold text-dark-blue">Duration of the Course : 3 Years Programme</p>
              <p className="text-lg font-semibold text-dark-blue">RECOGNIZED BY : West Bengal Nursing Council</p>
              <p className="text-lg font-semibold text-dark-blue">AFFILIATION : The Course is Affiliated to West Bengal Nursing Council</p>
              <p className="text-lg font-semibold text-dark-blue">MEDIUM OF INSTRUCTION : The medium of instruction will be English</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary">ELIGIBILITY FOR ADMISSION :</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-gray">
                <li>Age Limit: The Candidate must be between the ages of 17 to 27 years as on 1st January 2020.</li>
                <li>Education: 10 + 2 or its equivalent examination from a recognized Board/University with minimum 40 % marks in aggregate & minimum 40 % marks in English for general categories. Preference will be given to Science (Physics, Chemistry and Biology) students. No vocational course will be accepted.</li>
              </ol>
              <a href="#" className="mt-4 inline-block bg-primary text-white text-base font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-transform hover:scale-105">
                View Prospectus
              </a>
            </div>
          </div>
        </div>

        {/* B.Sc Nursing Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-rich-black mb-6">BSC Nursing</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-dark-blue">Number of Seats : 60 Seats</p>
              <p className="text-lg font-semibold text-dark-blue">Duration of the Course : 4 Years Programme</p>
              <p className="text-lg font-semibold text-dark-blue">RECOGNIZED BY : West Bengal Nursing Council</p>
              <p className="text-lg font-semibold text-dark-blue">AFFILIATION : The Course is Affiliated to West Bengal Nursing Council</p>
              <p className="text-lg font-semibold text-dark-blue">MEDIUM OF INSTRUCTION : The medium of instruction will be English</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary">ELIGIBILITY FOR ADMISSION :</h4>
              <ol className="list-decimal list-inside space-y-2 text-slate-gray">
                <li>Age Limit: The Candidate must be between the ages of 17 to 27 years as on 1st January 2020.</li>
                <li>Education: 10 + 2 or its equivalent examination from a recognized Board/University with minimum 40 % marks in aggregate & minimum 40 % marks in English for general categories. Preference will be given to Science (Physics, Chemistry and Biology) students. No vocational course will be accepted.</li>
              </ol>
              <a href="#" className="mt-4 inline-block bg-primary text-white text-base font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-transform hover:scale-105">
                View Prospectus
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
