const NewsLetter = () => {
  return (
    <section className="py-10 bg-blue-400">
      <div className="contain">
        <h2 className="mb-3 text-center text-xl text-white font-bold">
          Subscribe for Exclusive Updates
        </h2>
        <form id="Form">
          <textarea id="textarea"
            className="border-blue-900 border w-full h-32 sm:h-24 block placeholder:text-gray-900 text-gray-900 p-2 outline-none mx-auto"
            placeholder="Write Your Message Here"
          ></textarea>
          <input id="message"
            className="bg-white px-8 py-1 rounded text-gray-900 mt-4 mx-auto block cursor-pointer"
            type="submit"
            value="Send"
          ></input>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
