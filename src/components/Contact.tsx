const ContactUs = () => {
    return (
        <section className="bg-zinc-100 border-2 border-stone-300 w-1/2 rounded-lg">
            <div className="py-4 lg:py-8 px-4 mx-auto">
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="support@aifithub.com" required></input>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input type="text" id="subject" className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="First name" required></input>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="What do you want to talk about?"></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;