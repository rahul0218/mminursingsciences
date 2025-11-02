
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-rich-black tracking-tight">Feel free to discuss about courses</h1>
        <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">Contact Us</h2>
      </div>

      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-rich-black mb-6">MAHESHTALA MUNICIPAL INSTITUTE OF NURSING SCIENCES</h3>
        <p className="text-lg text-slate-gray mb-8">B1-38/1, New Santoshpur, Block-B, P.O. - Santoshpur, P.S.-Maheshtala, Kolkata-700142</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary">B.Sc. (NURSING SCIENCES)</h4>
            <p className="text-lg font-semibold text-dark-blue">Principal</p>
            <p className="text-lg font-semibold text-dark-blue">Ph: +91-9874342754, +91-8334919514</p>
            <p className="text-lg font-semibold text-dark-blue">Land No: 03371200000 Ext - 1402,1403</p>
            <p className="text-lg font-semibold text-dark-blue">E-mail: principal.mminursingcollege@gmail.com</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary">GENERAL NURSING & MIDWIFERY</h4>
            <p className="text-lg font-semibold text-dark-blue">Principal</p>
            <p className="text-lg font-semibold text-dark-blue">Ph: +91-9875622825</p>
            <p className="text-lg font-semibold text-dark-blue">Land No: 03371200000 Ext - 1401</p>
            <p className="text-lg font-semibold text-dark-blue">E-mail: maheshtalanursingschool@gmail.com</p>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-primary">General Enquiry</h4>
              <p className="text-lg font-semibold text-dark-blue">+91-6292259647</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
