const Notice = () => {
  const notices = [
    
    { day: '14', month: 'NOV', title: 'Prospectus', description: 'Download the prospectus for the institute', link: '/Prospectus.pdf' }
  ];

  return (
    <div className="container mx-auto px-4 py-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Notices & Events</h1>
      <div className="mt-8">
        {notices.map((notice, index) => (
          <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex-shrink-0 text-center bg-primary-light rounded-md p-3">
              <p className="text-2xl font-bold text-primary">{notice.day}</p>
              <p className="text-xs font-semibold text-primary">{notice.month}</p>
            </div>
            <div>
              <h3 className="font-bold text-rich-black">{notice.title}</h3>
              <p className="text-sm text-slate-gray mt-1">{notice.description}</p>
              <a href={notice.link} className="text-sm font-semibold text-primary mt-2 inline-block" target="_blank">Read More &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
