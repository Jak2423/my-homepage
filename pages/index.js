import Link from 'next/link';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

export default function Home() {
  const contacts = [
    {
      label: 'Github',
      link: 'https://github.com/Jak2423',
      icon: <FaGithub size={20} className='mr-2' />,
    },
    {
      label: 'Email',
      link: 'mailto:javhlan0420@gmail.com',
      icon: <FaEnvelope size={20} className=' mr-2' />,
    },
  ];

  return (
    <div className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full'>
      <div className='h-screen' id='home'>
        <div>
          <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-8'>
            Hi, I'm Javkhlan.
          </h1>
        </div>
        <div className=''>
          <h2 className='text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-8'>
            <span className='text-black dark:text-white font-semibold'>
              Software Engineer.
            </span>{' '}
            A self-taught developer with an interest in Computer Science.
          </h2>
        </div>
        <div className='text-base md:text-xl mb-8'>
          <p className='text-gray-600 dark:text-gray-400'>
            🚀 Exploring opportunities and side projects.
          </p>
        </div>
        <div className='flex flex-row mb-8'>
          {contacts.map((contact) => (
            <button
              className='flex justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-lg px-4 py-2 mr-4 hover:bg-gray-400 dark:hover:bg-gray-600 transition'
              key={contact.label}
            >
              <a
                className='flex flex-row'
                href={contact.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {contact.icon} {contact.label}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
