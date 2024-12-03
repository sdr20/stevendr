import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: 'Tech Corp',
      logo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Digital Solutions',
      logo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Innovation Labs',
      logo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Future Systems',
      logo: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[120px] grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;