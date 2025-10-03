import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import { BsDot } from 'react-icons/bs';

const SkillsPage = () => {
    const scrollContainerRef = useRef(null);
    const scrollInterval = 4000; // Time in milliseconds (4 seconds)
    const scrollAmount = 300; // Distance to scroll

    // 2. SCROLL LOGIC: Function to move the container
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            if (direction === 'left') {
                scrollContainerRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollContainerRef.current.scrollLeft += scrollAmount;
            }
        }
    };
    
    // 3. AUTO-SCROLL EFFECT
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let intervalId = setInterval(() => {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, scrollInterval);

        return () => clearInterval(intervalId);
    }, []);

    
    const CategoryCard = ({ title, skills }) => (
        <div className='flex-none w-72 bg-gray-900 p-6 rounded-lg border border-blue-500 hover:border-green-400 transition-colors duration-300'>
            <h3 className='text-green-400 text-2xl font-semibold mb-4'>{title}</h3>
            <ul className='space-y-2'>
                {skills.map((skill, index) => (
                    <li key={index} className='flex items-center text-gray-300 text-lg'>
                        <BsDot size={24} className='text-blue-400 flex-shrink-0' />
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
    
    // ... (categories array definition remains the same)
    const categories = [
        { title: "Core Backend & Frameworks", skills: ['Node.js', 'NestJS', 'Express', 'JavaScript', 'TypeScript', 'NX MonoRepo'] },
        { title: "Databases & Messaging", skills: ['MySQL', 'PostgreSQL', 'Redis', 'Kafka', 'SQS'] },
        { title: "Cloud & Serverless", skills: ['AWS', 'GCP', 'AWS API Gateway', 'Lambda', 'CloudFormation', 'CloudWatch', 'Docker', 'BedRock'] },
        { title: "Frontend & Utility", skills: ['React', 'HTML/CSS', 'Tailwind CSS', 'REST APIs', 'Git'] },
        { title: "Security & Tools", skills: ['ClamAV', 'Crypto'] },
    ];


    return (
        <div id='Skills' className='p-8 '>
            <h1 className='text-4xl font-extrabold text-green-400 mb-12 text-center'>Technical Skills</h1>
            
            <div className='relative max-w-7xl mx-auto'> 
                
                {/* Manual Scroll Arrows */}
                <button 
                    onClick={() => scroll('left')} 
                    className='absolute -left-2 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full z-10 hover:bg-black/80 transition-colors hidden md:block'
                >
                    <FaChevronLeft size={24} />
                </button>

                <div 
                    ref={scrollContainerRef}
                    className='flex space-x-6 pb-6 overflow-x-auto no-scrollbar scrollbar-hide scroll-smooth px-2' 
                >
                    {categories.map((cat, index) => (
                        <CategoryCard key={index} title={cat.title} skills={cat.skills} />
                    ))}
                </div>

                <button 
                    onClick={() => scroll('right')} 
                    className='absolute -right-2 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full z-10 hover:bg-black/80 transition-colors hidden md:block'
                >
                    <FaChevronRight size={24} />
                </button>

            </div>
        </div>
    );
};

export default SkillsPage;