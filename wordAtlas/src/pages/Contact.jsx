import { useId, useState } from "react";

export const Contact = () => {
  const id = useId();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const INITIAL_STATE = { name: "", email: "", message: "" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", data);
    setData(INITIAL_STATE);
  };

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-center mb-8 text-4xl font-bold">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center text-gray-500 w-full max-w-lg"
      >
        <label htmlFor={`${id}-name`} className="w-full">
          <input
            type="text"
            required
            value={data.name}
            name="name"
            id={`${id}-name`}
            placeholder="Enter Your Name"
            onChange={handleChange}
            className="border border-gray-500 outline-0 w-full pt-3 pb-2 pl-3 rounded-md"
          />
        </label>

        <label htmlFor={`${id}-email`} className="w-full">
          <input
            type="email"
            required
            name="email"
            value={data.email}
            id={`${id}-email`}
            placeholder="Enter Your Email"
            onChange={handleChange}
            className="border border-gray-500 outline-0 w-full pt-3 pb-2 pl-3 rounded-md"
          />
        </label>

        <label htmlFor={`${id}-message`} className="w-full">
          <textarea
            required
            name="message"
            value={data.message}
            id={`${id}-message`}
            rows={6}
            placeholder="Enter Your Message"
            onChange={handleChange}
            className="border border-gray-500 outline-0 w-full pt-3 pb-2 pl-3 rounded-md"
          />
        </label>

        <button
          className="pt-2 pb-2 pl-4 bg-gray-700 rounded-2xl w-full text-xl text-start text-gray-300 hover:bg-gray-600 transition"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};
