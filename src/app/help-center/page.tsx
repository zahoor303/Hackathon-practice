
// "use client"
// import React, { useState } from 'react';
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

// interface Subtopic {
//   title: string;
//   description: string;
// }

// interface Topic {
//   id: number;
//   title: string;
//   details: string;
//   subtopics: Subtopic[];
// }

// const HelpCenter = () => {
//   const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const topics: Topic[] = [
//     { 
//       id: 1, 
//       title: 'Booking & Reservations', 
//       details: 'Learn how to make, modify, and cancel a reservation easily.', 
//       subtopics: [
//         { title: 'Making a Reservation', description: 'Steps to book a car online.' },
//         { title: 'Modifying Reservations', description: 'How to change dates or pick-up locations.' },
//         { title: 'Canceling Reservations', description: 'Instructions on canceling a booking.' }
//       ]
//     },
//     { 
//       id: 2, 
//       title: 'Pricing & Payments', 
//       details: 'Understand pricing structure, payment methods, and discounts available.', 
//       subtopics: [
//         { title: 'Pricing Structure', description: 'Overview of car rental prices and options.' },
//         { title: 'Payment Methods', description: 'Accepted payment methods for booking a car.' },
//         { title: 'Discounts & Offers', description: 'How to use promo codes and discounts.' }
//       ]
//     },
//     { 
//       id: 3, 
//       title: 'Car Policies', 
//       details: 'Check out our policies regarding car rentals, insurance, and more.', 
//       subtopics: [
//         { title: 'Insurance Options', description: 'Details on insurance coverage for rentals.' },
//         { title: 'Fuel Policy', description: 'Our fuel policy for rentals.' },
//         { title: 'Age Restrictions', description: 'Age requirements for renting a car.' }
//       ]
//     },
//     { 
//       id: 4, 
//       title: 'Account Management', 
//       details: 'Manage your account settings, privacy preferences, and contact information.', 
//       subtopics: [
//         { title: 'Profile Settings', description: 'How to update your contact details.' },
//         { title: 'Password Management', description: 'Steps to change your account password.' },
//         { title: 'Privacy Settings', description: 'Manage your privacy preferences and data.' }
//       ]
//     },
//     { 
//       id: 5, 
//       title: 'Troubleshooting & FAQs', 
//       details: 'Get answers to the most frequently asked questions and troubleshooting tips.', 
//       subtopics: [
//         { title: 'Booking Errors', description: 'What to do if you experience issues during booking.' },
//         { title: 'Payment Issues', description: 'Solutions for failed or pending payments.' },
//         { title: 'Car Availability', description: 'How to check car availability and waitlists.' }
//       ]
//     },
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Note: Replace with your actual EmailJS configuration
//     emailjs.send(
//       'your_service_id', 
//       'your_template_id', 
//       {
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.message,
//       },
//       'your_user_id' 
//     )
//     .then((response: EmailJSResponseStatus) => {
//       alert('Message sent successfully!');
//       setIsModalOpen(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, (error: any) => {
//       alert('Failed to send message. Please try again.');
//       console.error('Error:', error);
//     });
//   };

//   const renderSubtopics = (subtopics: Subtopic[]) => {
//     return subtopics.map((subtopic, index) => (
//       <div key={index} className="p-4 rounded-lg mb-4 bg-gray-100 shadow-md">
//         <h4 className="text-xl font-semibold text-gray-800">{subtopic.title}</h4>
//         <p className="text-gray-700">{subtopic.description}</p>
//       </div>
//     ));
//   };

//   const renderTopicDetails = (topicId: number) => {
//     const topic = topics.find((t) => t.id === topicId);
//     if (topic) {
//       return (
//         <div>
//           <h3 className="text-2xl font-semibold text-gray-900 mb-4">Topic Details</h3>
//           <p className="text-gray-700 mb-6">{topic.details}</p>
//           {renderSubtopics(topic.subtopics)}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
//           Help & Support Center
//         </h1>

//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           {topics.map((topic) => (
//             <div
//               key={topic.id}
//               className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 cursor-pointer 
//               transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//               onClick={() => setSelectedTopic(topic.id)}
//             >
//               <h2 className="text-2xl font-semibold text-white">{topic.title}</h2>
//             </div>
//           ))}
//         </div>

//         {selectedTopic && (
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             {renderTopicDetails(selectedTopic)}
//             <div className="mt-6 flex justify-between">
//               <button
//                 className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
//                 onClick={() => setSelectedTopic(null)}
//               >
//                 Close
//               </button>
//               <button
//                 className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 Get More Help
//               </button>
//             </div>
//           </div>
//         )}

//         {isModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-8 rounded-xl w-96 max-w-full">
//               <h2 className="text-2xl font-semibold text-center mb-6">Contact Support</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Your Name"
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Your Email"
//                     className="w-full p-3 border rounded-lg"
//                     required
//                   />
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Your Message"
//                     className="w-full p-3 border rounded-lg"
//                     rows={4}
//                     required
//                   />
//                 </div>
//                 <div className="flex justify-between mt-6">
//                   <button
//                     type="button"
//                     onClick={() => setIsModalOpen(false)}
//                     className="px-5 py-2 bg-gray-200 rounded-lg"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-5 py-2 bg-indigo-600 text-white rounded-lg"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HelpCenter;






"use client"
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  HelpCircle, 
  Send, 
  X, 
  ChevronRight, 
  Clock, 
  AlertCircle, 
  CheckCircle 
} from 'lucide-react';

interface Subtopic {
  title: string;
  description: string;
  commonQuestions?: string[];
}

interface Topic {
  id: number;
  title: string;
  details: string;
  icon: React.ElementType;
  subtopics: Subtopic[];
}

const HelpCenter = () => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [recentQueries, setRecentQueries] = useState<string[]>([]);

  const topics: Topic[] = [
    { 
      id: 1, 
      icon: HelpCircle,
      title: 'Booking & Reservations', 
      details: 'Learn how to make, modify, and cancel a reservation easily.', 
      subtopics: [
        { 
          title: 'Making a Reservation', 
          description: 'Steps to book a car online.',
          commonQuestions: [
            'How do I create a new reservation?',
            'What documents do I need?',
            'Can I book a car for someone else?'
          ]
        },
        { 
          title: 'Modifying Reservations', 
          description: 'How to change dates or pick-up locations.',
          commonQuestions: [
            'Can I change my reservation date?',
            'How to switch pick-up location?',
            'Fees for reservation changes'
          ]
        },
        { 
          title: 'Canceling Reservations', 
          description: 'Instructions on canceling a booking.',
          commonQuestions: [
            'Cancellation policy',
            'How to cancel a reservation',
            'Refund process'
          ]
        }
      ]
    },
    // ... (other topics remain the same)
  ];

  useEffect(() => {
    if (searchQuery) {
      const filtered = topics.filter(topic => 
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.subtopics.some(subtopic => 
          subtopic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          subtopic.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredTopics(filtered);
    } else {
      setFilteredTopics(topics);
    }
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Simulate API call 
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add to recent queries
      setRecentQueries(prev => [formData.message, ...prev].slice(0, 5));

      setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 2000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 2000);
    }
  };

  const renderSubtopics = (subtopics: Subtopic[]) => {
    return subtopics.map((subtopic, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 hover:bg-gray-100 transition">
        <h4 className="text-xl font-semibold text-gray-800 flex items-center">
          <HelpCircle className="mr-2 text-blue-500" size={20} />
          {subtopic.title}
        </h4>
        <p className="text-gray-700 mt-2">{subtopic.description}</p>
        {subtopic.commonQuestions && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600 mb-2">Common Questions:</p>
            <div className="space-y-2">
              {subtopic.commonQuestions.map((q, idx) => (
                <div 
                  key={idx} 
                  className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer flex items-center"
                >
                  <ChevronRight size={16} className="mr-1" />
                  {q}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ));
  };

  const renderTopicDetails = (topicId: number) => {
    const topic = topics.find((t) => t.id === topicId);
    if (topic) {
      return (
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <topic.icon className="mr-3 text-blue-500" size={24} />
            {topic.title}
          </h3>
          <p className="text-gray-700 mb-6">{topic.details}</p>
          {renderSubtopics(topic.subtopics)}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Help & Support Center
        </h1>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <input 
            type="text" 
            placeholder="Search help topics, questions, or keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 pl-12 border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {(searchQuery ? filteredTopics : topics).map((topic) => (
            <div
              key={topic.id}
              className="bg-white border-2 border-transparent rounded-xl p-6 cursor-pointer 
              transform transition-all duration-300 hover:border-blue-500 hover:shadow-xl group"
              onClick={() => setSelectedTopic(topic.id)}
            >
              <div className="flex items-center mb-4">
                <topic.icon 
                  className="mr-4 text-blue-500 group-hover:text-blue-700 transition" 
                  size={32} 
                />
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-700">
                  {topic.title}
                </h2>
              </div>
              <p className="text-gray-600">{topic.details}</p>
            </div>
          ))}
        </div>

        {/* Recent Queries Section */}
        {recentQueries.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Clock className="mr-2 text-blue-500" size={20} />
              Recent Queries
            </h3>
            <div className="space-y-2">
              {recentQueries.map((query, index) => (
                <div 
                  key={index} 
                  className="text-gray-700 bg-gray-100 p-2 rounded-lg"
                >
                  {query}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Topic Details Modal */}
        {selectedTopic && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
              <button 
                onClick={() => setSelectedTopic(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
              {renderTopicDetails(selectedTopic)}
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Close
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Support Contact Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl w-96 max-w-full relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-semibold text-center mb-6">Contact Support</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full p-3 border rounded-lg"
                    rows={4}
                    required
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full py-3 rounded-lg text-white flex items-center justify-center ${
                      formStatus === 'sending' 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : formStatus === 'success' 
                        ? 'bg-green-500' 
                        : formStatus === 'error' 
                        ? 'bg-red-500' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {formStatus === 'sending' && <Clock className="mr-2 animate-spin" />}
                    {formStatus === 'success' && <CheckCircle className="mr-2" />}
                    {formStatus === 'error' && <AlertCircle className="mr-2" />}
                    {formStatus === 'idle' && <Send className="mr-2" />}
                    {formStatus === 'idle' && 'Send Message'}
                    {formStatus === 'sending' && 'Sending...'}
                    {formStatus === 'success' && 'Message Sent!'}
                    {formStatus === 'error' && 'Send Failed'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;