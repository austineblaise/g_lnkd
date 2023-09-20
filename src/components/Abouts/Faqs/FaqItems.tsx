import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const FAQItem = ({ question, answer }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-[#D434FE]  my-4  cursor-pointer" onClick={toggleExpand}>
    <div className="flex justify-between items-center">
      <div className="font-bold">{question}</div>
      <div onClick={toggleExpand}>
        {isExpanded ? <IoIosRemove className="text-2xl" /> : <IoIosAdd className="text-2xl" />}
      </div>
    </div>
    {isExpanded && <div className="mt-2">{answer}</div>}
  </div>
  );
};

const FAQs = () => {
  return (
    <div>
      <FAQItem
        question="Can I work on a project I started before the hackathon?"
        answer="React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update the user interface in response to data changes."
      />
      <FAQItem
        question="What happens if I need help during the hackathon?"
        answer="You can install React by using npm or yarn. First, create a new React application using 'npx create-react-app my-app' (replace 'my-app' with your project name). Then, navigate to your project folder and run 'npm start' or 'yarn start' to start the development server."
      />
      <FAQItem
        question="What happens if I don't have an idea for a project?"
        answer="React components are the building blocks of a React application. They are JavaScript classes or functions that return a piece of UI. Components can be reused, composed, and nested to create complex user interfaces."
      />
      <FAQItem
        question="Can I join a team or do I have to come with one?"
        answer="JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows you to write HTML-like code in your JavaScript files. JSX is transformed into JavaScript code during the build process."
      />
      <FAQItem
        question="What happens after the hackathon ends"
        answer="You can pass data between React components by using props. Props allow you to pass data from a parent component to a child component. The child component can then access and use this data."
      />
      <FAQItem
        question="Can I work on a project I started before the hackathon?"
        answer="State in React is a built-in object that represents the mutable data in a component. When the state of a component changes, React re-renders the component to reflect the updated data. You can manage state using the 'useState' hook."
      />
    </div>
  );
};

export default FAQs;
