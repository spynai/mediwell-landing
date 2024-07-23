'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [formValues, setFormValues] = useState({name: '', email: '', message: ''});

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch('https://api-main.aifithub.com/email/contact', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: formValues.name,
              email: formValues.email,
              message: formValues.message ? formValues.message : '',
              domain: window.location.hostname
            }),
          }).then((_) => {
            toast.success('Contact request email send!', {
                position: 'top-right',
                autoClose: 3000,
                closeOnClick: true
            });
          }).catch((_) => {
            toast.success('Failed to send request email! Try again later!', {
                position: 'top-right',
                autoClose: 3000,
                closeOnClick: true
            });
          });
    };

    return (
        <section className="bg-zinc-100 border-2 border-stone-300 w-1/2 rounded-lg">
            <div className="py-4 lg:py-8 px-4 mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor='email' className="block mb-2 font-medium text-gray-900">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            onChange={(event) => handleInputChange(event)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
                            placeholder="support@aifithub.com" 
                            required>    
                        </input>
                    </div>
                    <div>
                        <label htmlFor='name' className="block mb-2 font-medium text-gray-900">Your Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            onChange={(event) => handleInputChange(event)}
                            className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
                            placeholder="First name" 
                            required>
                        </input>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor='message' className="block mb-2 font-medium text-gray-900">Your message</label>
                        <textarea 
                            id="message" 
                            rows={6}
                            name="message"
                            onChange={(event) => handleInputChange(event)}
                            className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" 
                            placeholder="What do you want to talk about?">
                        </textarea>
                    </div>
                    <button type='submit' className="py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;