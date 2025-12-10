interface FlashCard {
  id: number;
  question: string;
  answer: string;
  difficulty: number; // 1-3, where 3 is most difficult
  nextShowTime: number;
  explanation?: string;
}

export const REACT_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "React was created by Facebook and is used for building interactive UIs. It uses a component-based architecture and virtual DOM for efficient rendering.",
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "A syntax extension for JavaScript that allows you to write HTML-like code in JavaScript",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "JSX makes it easier to write and add HTML in React. It gets transpiled to regular JavaScript function calls by tools like Babel.",
  },
  {
    id: 3,
    question: "What is a React Hook?",
    answer:
      "Functions that allow you to use state and other React features in functional components",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Hooks were introduced in React 16.8 to allow functional components to have state and lifecycle features that were previously only available in class components.",
  },
  {
    id: 4,
    question: "What is the Virtual DOM?",
    answer:
      "A lightweight copy of the actual DOM that React uses to optimize rendering performance",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The Virtual DOM is a JavaScript representation of the real DOM. React compares the virtual DOM with the previous version and only updates the parts that have changed, making updates more efficient.",
  },
  {
    id: 5,
    question: "What is the difference between state and props?",
    answer:
      "Props are read-only and passed from parent to child components, while state is mutable and managed within a component",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Props (properties) are how components communicate with each other. State is internal to a component and can be changed, while props are immutable from the child component's perspective.",
  },
  {
    id: 6,
    question: "What is the useEffect hook used for?",
    answer:
      "To perform side effects in function components, such as data fetching, subscriptions, or DOM manipulation",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "useEffect replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in functional components. It runs after every render by default.",
  },
  {
    id: 7,
    question: "What is React Context?",
    answer:
      "A way to pass data through the component tree without manually passing props at every level",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Context provides a way to share values between components without having to explicitly pass props through every level of the tree. It's designed to share data that can be considered 'global' for a tree of React components.",
  },
  {
    id: 8,
    question: "What are React keys and why are they important?",
    answer:
      "Special attributes used to help React identify which items have changed, been added, or been removed in lists",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.",
  },
  {
    id: 9,
    question: "What is the useState hook?",
    answer:
      "A hook that allows you to add state to functional components, returning a state variable and a function to update it",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "useState returns an array with two elements: the current state value and a setter function. The setter function can accept either a new value or a function that receives the previous state.",
  },
  {
    id: 10,
    question: "What is component lifecycle in React?",
    answer:
      "The series of methods that are invoked in different stages of a component's existence: mounting, updating, and unmounting",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "In class components, lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount. In functional components, useEffect handles lifecycle events.",
  },
  {
    id: 11,
    question: "What is prop drilling and how can you avoid it?",
    answer:
      "Passing props through multiple component layers. Can be avoided using Context API, Redux, or component composition",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Prop drilling occurs when you need to pass data through many components that don't need the data themselves, just to get it to a deeply nested component.",
  },
  {
    id: 12,
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer:
      "Controlled components have their state managed by React, while uncontrolled components manage their own state internally",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Controlled components use value and onChange props, making React the single source of truth. Uncontrolled components use refs to access DOM values directly.",
  },
  {
    id: 13,
    question: "What is React.memo() and when should you use it?",
    answer:
      "A higher-order component that memoizes the result and only re-renders if props change, used for performance optimization",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "React.memo performs a shallow comparison of props by default. You can provide a custom comparison function as the second argument for more control.",
  },
  {
    id: 14,
    question: "What is the useCallback hook?",
    answer:
      "A hook that returns a memoized callback function, preventing unnecessary re-renders of child components",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "useCallback is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",
  },
  {
    id: 15,
    question: "What is the useMemo hook?",
    answer:
      "A hook that memoizes expensive calculations and only recalculates when dependencies change",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "useMemo helps optimize performance by avoiding expensive calculations on every render. It should be used sparingly and only for genuinely expensive operations.",
  },
  {
    id: 16,
    question: "What is the useRef hook used for?",
    answer:
      "To create a mutable reference that persists across renders, commonly used to access DOM elements directly",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "useRef returns a mutable ref object whose .current property can hold any value. Unlike state, changing a ref doesn't trigger a re-render.",
  },
  {
    id: 17,
    question: "What is React Suspense?",
    answer:
      "A component that lets you display a fallback UI while waiting for some asynchronous operation to complete",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Suspense is commonly used with lazy loading components and data fetching. It provides a declarative way to handle loading states.",
  },
  {
    id: 18,
    question: "What is the difference between React.Fragment and div?",
    answer:
      "Fragment groups elements without adding extra DOM nodes, while div creates an actual DOM element",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Fragment helps avoid unnecessary wrapper elements that can affect CSS styling and DOM structure. You can use <></> as shorthand for React.Fragment.",
  },
  {
    id: 19,
    question: "What is React Router and why is it used?",
    answer:
      "A library for handling client-side routing in React applications, enabling navigation between different views",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "React Router allows you to create single-page applications with multiple views. It synchronizes the UI with the URL and provides declarative routing.",
  },
  {
    id: 20,
    question: "What is the difference between class components and functional components?",
    answer:
      "Class components use ES6 classes and have lifecycle methods, while functional components are simpler functions that use hooks for state and effects",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Functional components with hooks are now the preferred approach as they're simpler, more testable, and have better performance characteristics.",
  },
  {
    id: 21,
    question: "What is React StrictMode?",
    answer:
      "A development mode feature that helps identify potential problems in an application by running additional checks",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "StrictMode doesn't render any visible UI but activates additional checks and warnings for its descendants. It helps catch side effects and deprecated APIs.",
  },
  {
    id: 22,
    question: "What is the useReducer hook and when should you use it?",
    answer:
      "A hook for managing complex state logic, similar to Redux but for component-level state",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "useReducer is preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.",
  },
  {
    id: 23,
    question: "What is React.lazy() and how does it work?",
    answer:
      "A function that enables code splitting by allowing you to render dynamic imports as regular components",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "React.lazy() takes a function that must call a dynamic import() and returns a Promise that resolves to a module with a default export containing a React component.",
  },
  {
    id: 24,
    question: "What is the difference between createElement and JSX?",
    answer:
      "JSX is syntactic sugar that gets transpiled to React.createElement() calls",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "JSX makes code more readable and easier to write, but under the hood, it's converted to React.createElement() function calls by tools like Babel.",
  },
  {
    id: 25,
    question: "What are Higher-Order Components (HOCs)?",
    answer:
      "Functions that take a component and return a new component with additional props or behavior",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "HOCs are a pattern for reusing component logic. They're pure functions with no side effects and don't modify the input component.",
  },
  {
    id: 26,
    question: "What is the useContext hook?",
    answer:
      "A hook that allows you to consume context values without wrapping components in Context.Consumer",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "useContext accepts a context object and returns the current context value for that context, making it easier to consume context in functional components.",
  },
  {
    id: 27,
    question: "What is React reconciliation?",
    answer:
      "The process React uses to determine what changes need to be made to the DOM by comparing the current and previous virtual DOM trees",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "React uses a diffing algorithm to efficiently update the DOM. It compares elements by type and key to determine the minimal set of changes needed.",
  },
  {
    id: 28,
    question: "What are render props in React?",
    answer:
      "A technique for sharing code between components using a prop whose value is a function that returns a React element",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Render props provide a way to share stateful logic between components. The component with the render prop calls the function instead of implementing its own render logic.",
  },
  {
    id: 29,
    question: "What is the difference between componentDidMount and useEffect?",
    answer:
      "componentDidMount runs once after mounting in class components, while useEffect can run after every render or with specific dependencies in functional components",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "useEffect with an empty dependency array ([]) mimics componentDidMount behavior, but useEffect is more flexible and can handle multiple lifecycle events.",
  },
  {
    id: 30,
    question: "What is React Fiber?",
    answer:
      "React's reconciliation algorithm that enables incremental rendering and better performance for complex applications",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Fiber allows React to pause, abort, or reuse work as new updates come in. It enables features like time slicing and concurrent rendering.",
  },
  {
    id: 31,
    question: "What is the difference between shallow and deep comparison in React?",
    answer:
      "Shallow comparison checks if primitive values or object references are equal, while deep comparison checks the actual content of objects",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "React uses shallow comparison by default for performance. Deep comparison is more expensive but sometimes necessary for complex nested objects.",
  },
  {
    id: 32,
    question: "What is the purpose of the dependency array in useEffect?",
    answer:
      "To control when the effect runs by specifying which values it depends on",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The dependency array tells React to only re-run the effect if one of the dependencies has changed. An empty array means the effect runs only once after mounting.",
  },
  {
    id: 33,
    question: "What is React DevTools and how is it useful?",
    answer:
      "A browser extension that provides debugging utilities for React applications, allowing inspection of component hierarchy and state",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "React DevTools helps developers inspect React component trees, view props and state, and profile performance. It's available as a browser extension for Chrome and Firefox.",
  },
];

export const HTTP_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question: "What does HTTP stand for?",
    answer: "HyperText Transfer Protocol",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "HTTP is the foundation of data communication for the World Wide Web, where 'HyperText' refers to structured text that uses logical links between nodes containing text.",
  },
  {
    id: 2,
    question: "What is the main purpose of HTTP?",
    answer: "To enable communication between web servers and clients",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "HTTP acts as a request-response protocol in the client-server computing model, where a web browser acts as the client and an application running on a computer hosting the website acts as the server.",
  },
  {
    id: 3,
    question: "What are the main HTTP methods?",
    answer: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "These methods indicate the desired action to be performed on the identified resource. Each method has a specific purpose: GET retrieves data, POST creates new data, PUT updates existing data, DELETE removes data, etc.",
  },
  {
    id: 4,
    question: "What is the difference between GET and POST?",
    answer: "GET retrieves data, POST submits data to be processed",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "GET requests are used to retrieve data from a server and should not change the server's state. POST requests are used to send data to the server, often to create or update resources, and may change the server's state.",
  },
  {
    id: 5,
    question: "What is an HTTP status code?",
    answer: "A server response to indicate the status of an HTTP request",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Status codes are 3-digit numbers grouped into five classes: 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error), and 5xx (Server Error). They provide quick information about the request's outcome.",
  },
  {
    id: 6,
    question: "What does a 200 status code mean?",
    answer: "OK - The request was successful",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The 200 status code indicates that the request was successfully received, understood, and accepted. It's the standard response for successful HTTP requests.",
  },
  {
    id: 7,
    question: "What does a 404 status code mean?",
    answer: "Not Found - The requested resource could not be found",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "A 404 error occurs when the server cannot find the requested resource. This could be due to a broken link, a mistyped URL, or the resource being moved or deleted.",
  },
  {
    id: 8,
    question: "What does a 500 status code mean?",
    answer: "Internal Server Error - A generic server error occurred",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The 500 status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. It's a generic error message when no more specific message is suitable.",
  },
  {
    id: 9,
    question: "What is an HTTP header?",
    answer: "Additional information sent with requests and responses",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "HTTP headers allow the client and server to pass additional information with the request or response. They can control caching, authentication, content negotiation, and more.",
  },
  {
    id: 10,
    question: "What is the Content-Type header?",
    answer: "Indicates the media type of the resource being sent",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The Content-Type header tells the client what type of content is being returned. Common types include 'text/html' for HTML documents, 'application/json' for JSON data, and 'image/png' for PNG images.",
  },
  {
    id: 11,
    question: "What is HTTPS?",
    answer: "HTTP Secure - HTTP over SSL/TLS for encrypted communication",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "HTTPS adds a layer of security by using SSL/TLS to encrypt the communication between the client and server. This prevents eavesdropping, tampering, and message forgery.",
  },
  {
    id: 12,
    question: "What is a query string in HTTP?",
    answer: "Part of URL after ? containing key-value pairs for parameters",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Query strings are used to pass data to the server in the URL. They consist of key-value pairs separated by &, like '?name=John&age=30'. They're commonly used in GET requests to filter or search data.",
  },
  {
    id: 13,
    question: "What is an HTTP cookie?",
    answer: "Small piece of data stored by the browser for state management",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Cookies are used to maintain stateful information between HTTP requests. They can store user preferences, session identifiers, or tracking information, and are sent with every request to the same domain.",
  },
  {
    id: 14,
    question: "What is CORS?",
    answer: "Cross-Origin Resource Sharing - Allows cross-domain requests",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "CORS is a security mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated. It uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.",
  },
  {
    id: 15,
    question: "What is HTTP/2?",
    answer: "Major revision of HTTP protocol with performance improvements",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "HTTP/2 improves web performance by introducing features like binary framing, multiplexing, header compression, and server push. It maintains the same semantics as HTTP/1.1 but is more efficient.",
  },
  {
    id: 16,
    question: "What is a REST API?",
    answer: "Architectural style using HTTP methods for web services",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "REST (Representational State Transfer) is an architectural style that uses standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources. It's stateless and uses JSON or XML for data exchange.",
  },
  {
    id: 17,
    question: "What is an HTTP proxy?",
    answer: "Server that acts as intermediary for client requests",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "An HTTP proxy sits between clients and servers, forwarding requests and responses. It can be used for caching, filtering, load balancing, or anonymizing requests.",
  },
  {
    id: 18,
    question: "What is HTTP caching?",
    answer: "Storing responses to reduce server load and improve performance",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "HTTP caching stores copies of responses so they can be reused for subsequent requests. This reduces server load, network traffic, and improves response times. Caching can occur at various levels: browser, proxy, or server.",
  },
  {
    id: 19,
    question: "What is the difference between PUT and PATCH?",
    answer: "PUT replaces entire resource, PATCH updates partial resource",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "PUT is used to completely replace an existing resource with the new data provided, while PATCH is used to apply partial modifications to a resource. PUT requires sending the entire resource, while PATCH only needs the changes.",
  },
  {
    id: 20,
    question: "What is the OPTIONS method used for?",
    answer: "To describe the communication options for the target resource",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "The OPTIONS method is used to describe the communication options for the target resource. It's often used in CORS preflight requests to determine what HTTP methods and headers are allowed.",
  },
  {
    id: 21,
    question: "What is HTTP pipelining?",
    answer: "Sending multiple requests without waiting for responses",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "HTTP pipelining allows a client to send multiple requests without waiting for each response, reducing latency. However, it can lead to head-of-line blocking and is largely replaced by HTTP/2's multiplexing.",
  },
  {
    id: 22,
    question: "What is the Host header?",
    answer: "Specifies the domain name of the server being requested",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The Host header is mandatory in HTTP/1.1 and specifies the domain name of the server being requested. This is particularly important for virtual hosting, where multiple websites are hosted on the same IP address.",
  },
  {
    id: 23,
    question: "What is the User-Agent header?",
    answer: "Identifies the client making the request",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The User-Agent header contains information about the client software making the request, including the operating system, software vendor, and version. This helps servers tailor responses to different client capabilities.",
  },
  {
    id: 24,
    question: "What is HTTP persistent connection?",
    answer: "Keeping the connection open for multiple requests/responses",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Persistent connections (also called keep-alive) allow multiple HTTP requests and responses to be sent over a single TCP connection, reducing latency and improving performance by avoiding the overhead of establishing new connections for each request.",
  },
  {
    id: 25,
    question: "What is the difference between HTTP/1.1 and HTTP/2?",
    answer:
      "HTTP/2 introduces binary framing, multiplexing, and header compression",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "HTTP/2 improves upon HTTP/1.1 by using binary framing for more efficient data transfer, multiplexing to send multiple requests simultaneously over a single connection, and header compression to reduce overhead. It also introduces server push capabilities.",
  },
];

export const OOP_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question: "What are the four main principles of OOP?",
    answer: "Encapsulation, Abstraction, Inheritance, Polymorphism",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "These principles form the foundation of object-oriented programming. Encapsulation bundles data and methods, abstraction hides complexity, inheritance allows code reuse, and polymorphism enables different implementations.",
  },
  {
    id: 2,
    question: "What is encapsulation in Java?",
    answer:
      "Bundling data and methods that operate on that data within a single unit (class)",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Encapsulation is achieved in Java using access modifiers (private, protected, public) and getter/setter methods to control access to class members.",
  },
  {
    id: 3,
    question: "What is inheritance in Java?",
    answer:
      "A mechanism where a new class derives properties and behaviors from an existing class",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "In Java, inheritance is implemented using the 'extends' keyword. The child class inherits fields and methods from the parent class, promoting code reuse.",
  },
  {
    id: 4,
    question: "What is polymorphism in Java?",
    answer: "The ability of an object to take on many forms",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Polymorphism in Java is achieved through method overriding (runtime polymorphism) and method overloading (compile-time polymorphism).",
  },
  {
    id: 5,
    question: "What is abstraction in Java?",
    answer: "Hiding implementation details and showing only essential features",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Abstraction in Java is implemented using abstract classes and interfaces. It helps reduce complexity and increases code maintainability.",
  },
  {
    id: 6,
    question: "What is an interface in Java?",
    answer:
      "A reference type that contains only abstract methods and constants",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Interfaces in Java define a contract that implementing classes must follow. They support multiple inheritance and are declared using the 'interface' keyword.",
  },
  {
    id: 7,
    question: "What is method overriding in Java?",
    answer:
      "When a subclass provides a specific implementation of a method already defined in its parent class",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its parent class, using the same method signature.",
  },
  {
    id: 8,
    question: "What is method overloading in Java?",
    answer:
      "Having multiple methods with the same name but different parameters",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Method overloading is a compile-time polymorphism where multiple methods can have the same name but different parameter lists (different number or types of parameters).",
  },
  {
    id: 9,
    question: "What is a constructor in Java?",
    answer: "A special method used to initialize objects",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Constructors have the same name as the class and are called when an object is created. They don't have a return type and can be overloaded.",
  },
  {
    id: 10,
    question: "What is the 'this' keyword in Java?",
    answer: "A reference to the current object",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'this' keyword is used to refer to the current instance of a class. It's commonly used to distinguish between instance variables and parameters with the same name.",
  },
  {
    id: 11,
    question: "What is the 'super' keyword in Java?",
    answer: "A reference to the parent class object",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'super' keyword is used to access parent class members (methods and variables) and to call the parent class constructor.",
  },
  {
    id: 12,
    question: "What is a static method in Java?",
    answer:
      "A method that belongs to the class rather than any object instance",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Static methods are called using the class name rather than an object instance. They can only access static variables and other static methods.",
  },
  {
    id: 13,
    question: "What is an abstract class in Java?",
    answer:
      "A class that cannot be instantiated and may contain abstract methods",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Abstract classes are declared with the 'abstract' keyword and can contain both abstract and concrete methods. They must be extended by a subclass to be used.",
  },
  {
    id: 14,
    question:
      "What is the difference between an abstract class and an interface?",
    answer:
      "Abstract classes can have implementation, while interfaces cannot (before Java 8)",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Abstract classes can have both abstract and concrete methods and can have instance variables, while interfaces (before Java 8) could only have abstract methods and constants.",
  },
  {
    id: 15,
    question: "What is composition in OOP?",
    answer:
      "A 'has-a' relationship between classes where one class contains another",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Composition is a way to combine objects to form more complex objects. It's typically used when one object is a part of another object.",
  },
  {
    id: 16,
    question: "What is the difference between composition and inheritance?",
    answer:
      "Inheritance is an 'is-a' relationship, while composition is a 'has-a' relationship",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Inheritance represents a parent-child relationship, while composition represents a whole-part relationship. Composition is generally preferred over inheritance for code reuse.",
  },
  {
    id: 17,
    question: "What is a singleton class in Java?",
    answer: "A class that allows only one instance of itself to be created",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Singleton classes are implemented by making the constructor private and providing a static method to get the single instance of the class.",
  },
  {
    id: 18,
    question: "What is the final keyword in Java?",
    answer:
      "A modifier that prevents modification of classes, methods, or variables",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "When applied to a class, it prevents inheritance; to a method, it prevents overriding; and to a variable, it makes it a constant.",
  },
  {
    id: 19,
    question: "What is a package in Java?",
    answer: "A namespace that organizes related classes and interfaces",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Packages help prevent naming conflicts, control access, and make it easier to locate and use classes. They are declared using the 'package' keyword.",
  },
  {
    id: 20,
    question: "What is the difference between == and .equals() in Java?",
    answer: "== compares references, .equals() compares content",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The == operator checks if two references point to the same object, while .equals() is a method that compares the actual content of objects (when properly overridden).",
  },
];

export const TYPESCRIPT_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question: "What is TypeScript?",
    answer: "A typed superset of JavaScript that compiles to plain JavaScript",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "TypeScript adds optional static typing to JavaScript, making it easier to write and maintain large-scale applications.",
  },
  {
    id: 2,
    question: "What are the main benefits of using TypeScript?",
    answer:
      "Static typing, better tooling, improved code quality, and easier refactoring",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "TypeScript helps catch errors during development, provides better IDE support, and makes code more maintainable.",
  },
  {
    id: 3,
    question:
      "How do you declare a variable with a specific type in TypeScript?",
    answer: "let variableName: type = value;",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "TypeScript uses type annotations after the variable name to specify the type, like 'let age: number = 25;'",
  },
  {
    id: 4,
    question: "What are the basic types in TypeScript?",
    answer:
      "number, string, boolean, array, tuple, enum, any, void, null, undefined",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "TypeScript extends JavaScript's types with additional ones like tuple and enum for better type safety.",
  },
  {
    id: 5,
    question: "What is the 'any' type in TypeScript?",
    answer: "A type that disables type checking and allows any value",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The 'any' type is useful when you need to opt out of type checking, but should be used sparingly as it reduces type safety.",
  },
  {
    id: 6,
    question: "How do you define an array in TypeScript?",
    answer: "let arr: type[] = []; or let arr: Array<type> = [];",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Both syntaxes are valid, like 'let numbers: number[] = [1, 2, 3];' or 'let numbers: Array<number> = [1, 2, 3];'",
  },
  {
    id: 7,
    question: "What is a tuple in TypeScript?",
    answer:
      "An array with fixed number of elements where each element has a specific type",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Tuples allow you to express an array with a fixed number of elements whose types are known, like 'let person: [string, number] = ['Alice', 30];'",
  },
  {
    id: 8,
    question: "What is an enum in TypeScript?",
    answer: "A way to define a set of named constants",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Enums make it easier to work with sets of related constants, like 'enum Direction { Up, Down, Left, Right }'",
  },
  {
    id: 9,
    question: "What is type inference in TypeScript?",
    answer:
      "The ability to automatically determine the type of a variable based on its value",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "TypeScript can often infer types without explicit annotations, like 'let count = 5;' where TypeScript knows count is a number.",
  },
  {
    id: 10,
    question: "What is a union type in TypeScript?",
    answer: "A type that can be one of several types",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Union types allow a variable to hold values of different types, like 'let id: string | number;'",
  },
  {
    id: 11,
    question: "What is an interface in TypeScript?",
    answer: "A way to define the shape of an object",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Interfaces describe the structure of objects, including their properties and methods, like 'interface User { name: string; age: number; }'",
  },
  {
    id: 12,
    question:
      "What is the difference between 'interface' and 'type' in TypeScript?",
    answer:
      "Interfaces are extendable, while types can represent more complex types",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Interfaces are better for object shapes and can be extended, while types can represent unions ( | | |),primitives (normal types like booleans) intersections, and other complex types.",
  },
  {
    id: 13,
    question: "What is a generic in TypeScript?",
    answer: "A way to create reusable components that work with multiple types",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Generics allow you to create functions, classes, and interfaces that work with any type, like 'function identity<T>(arg: T): T { return arg; }'",
  },
  {
    id: 14,
    question: "What is the 'readonly' modifier in TypeScript?",
    answer: "A modifier that makes a property immutable after initialization",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The readonly modifier prevents reassignment of a property, like 'interface User { readonly id: number; name: string; }'",
  },
  {
    id: 15,
    question: "What is a type assertion in TypeScript?",
    answer: "A way to tell the compiler to treat a value as a specific type",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Type assertions are like type casts in other languages, using syntax like 'let strLength: number = (someValue as string).length;'",
  },
  {
    id: 16,
    question: "What is the 'keyof' operator in TypeScript?",
    answer:
      "An operator that gets the keys of an object type as a union of string literals",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The keyof operator is useful for creating type-safe property access, like 'type UserKeys = keyof User;'",
  },
  {
    id: 17,
    question: "What is the 'typeof' operator in TypeScript?",
    answer: "An operator that gets the type of a variable or property",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The typeof operator can be used to get the type of a value, like 'let s = 'hello'; let n: typeof s;' where n would be of type string",
  },
  {
    id: 18,
    question: "What is a namespace in TypeScript?",
    answer: "A way to organize code and prevent naming collisions",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Namespaces are like modules but are used to group related code and avoid global scope pollution, like 'namespace Validation { ... }'",
  },
  {
    id: 19,
    question: "What is a decorator in TypeScript?",
    answer:
      "A special kind of declaration that can be attached to classes, methods, or properties",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Decorators are used to modify or add functionality to classes and their members, often used in frameworks like Angular",
  },
  {
    id: 20,
    question: "What is the 'never' type in TypeScript?",
    answer: "A type that represents values that never occur",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The never type is used for functions that never return (always throw exceptions) or for impossible cases in type narrowing",
  },
  {
    id: 21,
    question: "What is type narrowing in TypeScript?",
    answer: "The process of refining a type to a more specific type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Type narrowing happens through type guards like typeof, instanceof, or user-defined type guards, allowing more specific type checking",
  },
  {
    id: 22,
    question: "What is a type guard in TypeScript?",
    answer: "An expression that performs runtime checks to guarantee a type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Type guards are used to narrow down types, like 'if (typeof x === 'string') { ... }' where x is known to be a string inside the block",
  },
  {
    id: 23,
    question: "What is the 'as' keyword used for in TypeScript?",
    answer: "For type assertions",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The 'as' keyword is used to tell the compiler to treat a value as a specific type, like 'let str = someValue as string;'",
  },
  {
    id: 24,
    question: "What is a mapped type in TypeScript?",
    answer:
      "A type that creates new types by transforming properties of existing types",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Mapped types allow you to create new types based on the properties of existing ones, like 'Readonly<T>' which makes all properties readonly",
  },
  {
    id: 25,
    question: "What is the 'infer' keyword in TypeScript?",
    answer:
      "A keyword used in conditional types to infer types within the extends clause",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "The 'infer' keyword is used in conditional types to capture and use types, like in 'ReturnType<T>' which infers the return type of a function",
  },
  {
    id: 26,
    question: "What is a utility type in TypeScript?",
    answer:
      "Predefined generic types that help with common type transformations",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Utility types like Partial, Required, and Pick provide convenient ways to transform types without writing custom type logic",
  },
  {
    id: 27,
    question: "What is the 'satisfies' operator in TypeScript?",
    answer:
      "An operator that checks if a value satisfies a type without changing its type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'satisfies' operator ensures a value conforms to a type while preserving its specific type information, useful for type-safe configurations",
  },
  {
    id: 28,
    question: "What is a template literal type in TypeScript?",
    answer:
      "A type that uses template literal syntax to create string literal types",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Template literal types allow creating string types based on patterns, like 'type EventName = `on${Capitalize<string>}`;'",
  },
  {
    id: 29,
    question: "What is the 'unknown' type in TypeScript?",
    answer:
      "A type-safe alternative to 'any' that requires type checking before use",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'unknown' type is similar to 'any' but requires type assertions or type checks before performing operations, making it safer",
  },
  {
    id: 30,
    question: "What is a discriminated union in TypeScript?",
    answer:
      "A discriminated union in TypeScript is a union of object types that share a common property (discriminator) with different literal values. This allows type narrowing and strict type safety",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Discriminated unions use a common property (the discriminant) to enable type narrowing, making it easier to work with union types",
  },
  {
    id: 31,
    question: "What is the 'readonly' modifier in TypeScript?",
    answer: "A modifier that makes properties immutable",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The 'readonly' modifier prevents properties from being modified after they're initialized, making objects more predictable",
  },
  {
    id: 32,
    question: "What is a type predicate in TypeScript?",
    answer: "A function that returns a boolean and asserts a type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Type predicates are functions that return a boolean and use the 'is' keyword to assert a type, like 'function isString(x: any): x is string'",
  },
  {
    id: 33,
    question: "What is the 'keyof' operator in TypeScript?",
    answer:
      "An operator that gets the keys of a type as a union of string literals",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'keyof' operator is useful for creating type-safe property access, like 'type UserKeys = keyof User;'",
  },
  {
    id: 34,
    question: "What is the 'typeof' operator in TypeScript?",
    answer: "An operator that gets the type of a variable or property",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The typeof operator can be used to get the type of a value, like 'let s = 'hello'; let n: typeof s;' where n would be of type string",
  },
  {
    id: 35,
    question: "What is a namespace in TypeScript?",
    answer: "A way to organize code and prevent naming collisions",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Namespaces are like modules but are used to group related code and avoid global scope pollution, like 'namespace Validation { ... }'",
  },
  {
    id: 36,
    question: "What is a decorator in TypeScript?",
    answer:
      "A special kind of declaration that can be attached to classes, methods, or properties",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Decorators are used to modify or add functionality to classes and their members, often used in frameworks like Angular",
  },
  {
    id: 37,
    question: "What is the 'never' type in TypeScript?",
    answer: "A type that represents values that never occur",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The never type is used for functions that never return (always throw exceptions) or for impossible cases in type narrowing",
  },
  {
    id: 38,
    question: "What is type narrowing in TypeScript?",
    answer: "The process of refining a type to a more specific type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Type narrowing happens through type guards like typeof, instanceof, or user-defined type guards, allowing more specific type checking",
  },
  {
    id: 39,
    question: "What is a type guard in TypeScript?",
    answer: "An expression that performs runtime checks to guarantee a type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Type guards are used to narrow down types, like 'if (typeof x === 'string') { ... }' where x is known to be a string inside the block",
  },
  {
    id: 40,
    question: "What is the 'as const' assertion in TypeScript?",
    answer:
      "A type assertion that makes an object or array read-only and narrows its type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'as const' assertion makes all properties read-only and infers the most specific type possible, useful for creating immutable constants",
  },
  {
    id: 41,
    question: "What is a conditional type in TypeScript?",
    answer:
      "A type that selects one of two possible types based on a condition",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Conditional types use the syntax 'T extends U ? X : Y' to choose between types based on whether a type extends another type",
  },
  {
    id: 42,
    question: "What is the 'declare' keyword in TypeScript?",
    answer: "A keyword used to declare types for existing JavaScript code",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'declare' keyword is used to tell TypeScript about the existence of variables, functions, or classes without providing an implementation",
  },
  {
    id: 43,
    question: "What are mapped types in TypeScript?",
    answer:
      "A way to create new types based on existing types by transforming their properties",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Mapped types allow you to create new types by iterating over the properties of existing types, like 'type Readonly<T> = { readonly [P in keyof T]: T[P] }'",
  },
  {
    id: 44,
    question: "What is the 'infer' keyword in TypeScript?",
    answer: "A keyword used in conditional types to extract type information",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "The 'infer' keyword allows you to extract and reference type information within conditional types, commonly used in utility types",
  },
  {
    id: 45,
    question: "What is the 'unknown' type in TypeScript?",
    answer:
      "A type-safe counterpart of 'any' that requires type checking before use",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Unlike 'any', 'unknown' requires type checking or assertion before performing operations, making it safer for values of uncertain type",
  },
  {
    id: 46,
    question: "What are literal types in TypeScript?",
    answer: "Types that represent exact values",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Literal types allow you to specify exact values a type can have, like 'type Direction = 'north' | 'south' | 'east' | 'west''",
  },
  {
    id: 47,
    question: "What is the 'satisfies' operator in TypeScript?",
    answer: "An operator that validates types without widening literal types",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "The 'satisfies' operator ensures values match a type while preserving literal types, useful for const assertions and type checking",
  },
  {
    id: 48,
    question: "What are index signatures in TypeScript?",
    answer: "A way to define types for objects with dynamic property names",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Index signatures allow you to type objects where property names aren't known in advance, like '{ [key: string]: number }'",
  },
  {
    id: 49,
    question: "What is the 'Partial' utility type in TypeScript?",
    answer: "A utility type that makes all properties of a type optional",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Partial<T> creates a new type with all properties of T set to optional, useful for update operations",
  },
  {
    id: 50,
    question: "What is the 'Pick' utility type in TypeScript?",
    answer:
      "A utility type that creates a new type with only selected properties",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Pick<T, K> creates a type by picking only specified properties K from type T",
  },
  {
    id: 51,
    question: "What are discriminated unions in TypeScript?",
    answer:
      "Union types with a common property that uniquely identifies each type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Discriminated unions use a common property to distinguish between union members, making type narrowing more reliable",
  },
  {
    id: 52,
    question: "What is the 'Record' utility type in TypeScript?",
    answer:
      "A utility type that creates an object type with specified keys and value types",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Record<K,T> creates an object type with keys of type K and values of type T",
  },
  {
    id: 53,
    question: "What are template literal types in TypeScript?",
    answer: "Types that combine literal types using template literal syntax",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Template literal types allow you to create new string literal types by combining existing ones, like type Greeting = `Hello ${string}`",
  },
  {
    id: 54,
    question: "What is the 'Omit' utility type in TypeScript?",
    answer:
      "A utility type that creates a type by excluding specified properties",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Omit<T,K> creates a new type by removing specified properties K from type T",
  },
  {
    id: 55,
    question: "What are abstract classes in TypeScript?",
    answer:
      "Classes that can't be instantiated directly and may contain abstract methods",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Abstract classes serve as base classes for other classes and can define abstract methods that must be implemented by derived classes",
  },
  {
    id: 56,
    question: "What is the 'Required' utility type in TypeScript?",
    answer: "A utility type that makes all properties required",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Required<T> creates a new type where all properties of T are required, opposite of Partial<T>",
  },
  {
    id: 57,
    question: "What are intersection types in TypeScript?",
    answer: "Types that combine multiple types into one",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Intersection types combine types using the & operator, requiring an object to fulfill all the combined types",
  },
  {
    id: 58,
    question: "What is the 'NonNullable' utility type in TypeScript?",
    answer: "A utility type that removes null and undefined from a type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "NonNullable<T> creates a type by excluding null and undefined from type T",
  },
  {
    id: 59,
    question: "What are type predicates in TypeScript?",
    answer: "Functions that return a boolean and act as type guards",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Type predicates are functions that return 'parameterName is Type' and help TypeScript narrow types in conditional blocks",
  },
  {
    id: 60,
    question: "What is the 'ReturnType' utility type in TypeScript?",
    answer: "A utility type that extracts the return type of a function type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "ReturnType<T> obtains the return type of a function type, useful for working with function types and callbacks",
  },
  {
    id: 61,
    question: "What is TypeScript's module system?",
    answer: "A way to organize code into reusable units with import/export",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "TypeScript modules help organize code by allowing you to export and import types, functions, and values between files",
  },
  {
    id: 62,
    question: "What are ambient declarations in TypeScript?",
    answer: "Type declarations for code that exists externally",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Ambient declarations use 'declare' keyword to tell TypeScript about types that exist elsewhere, like in JavaScript libraries",
  },
  {
    id: 63,
    question: "What is the 'in' operator in TypeScript?",
    answer: "An operator that checks if a property exists on an object",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'in' operator can be used as a type guard to narrow types based on property existence",
  },
  {
    id: 64,
    question: "What are index access types in TypeScript?",
    answer: "Types that look up a property type in another type",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Index access types use T[K] syntax to get the type of a property K in type T",
  },
  {
    id: 65,
    question: "What is the 'implements' keyword in TypeScript?",
    answer: "A keyword used to ensure a class satisfies an interface",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The implements keyword enforces that a class provides all the members defined in an interface",
  },
  {
    id: 66,
    question: "What are type parameters in TypeScript?",
    answer: "Placeholders for types in generic definitions",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Type parameters like T in function<T> allow you to create reusable generic code",
  },
  {
    id: 67,
    question: "What is type erasure in TypeScript?",
    answer: "The removal of type information during compilation",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "TypeScript's type system is erased during compilation to JavaScript, leaving no runtime type information",
  },
  {
    id: 68,
    question: "What are declaration merging in TypeScript?",
    answer: "The ability to merge multiple declarations with the same name",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "TypeScript can merge multiple interface or namespace declarations into a single definition",
  },
  {
    id: 69,
    question: "What is the 'is' operator in TypeScript?",
    answer: "An operator used in type predicates to perform type narrowing",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The 'is' operator helps define custom type guards that narrow types in conditional blocks",
  },
  {
    id: 70,
    question: "What are conditional types in TypeScript?",
    answer: "Types that choose between two options based on a type condition",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Conditional types use T extends U ? X : Y syntax to select types based on relationships",
  },
  {
    id: 71,
    question: "What is the 'unique symbol' type in TypeScript?",
    answer: "A subtype of symbol with unique identity",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Unique symbols are special symbols that are guaranteed to be unique across declarations",
  },
  {
    id: 72,
    question: "What are abstract methods in TypeScript?",
    answer:
      "Methods in abstract classes that must be implemented by derived classes",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Abstract methods define a method signature but leave implementation to derived classes",
  },
  {
    id: 73,
    question: "What is the 'private' keyword in TypeScript?",
    answer: "A modifier that restricts access to class members",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Private members can only be accessed within the class that defines them",
  },
  {
    id: 74,
    question: "What are type aliases in TypeScript?",
    answer: "Names for types defined using the type keyword",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Type aliases create new names for types, making complex types more readable",
  },
  {
    id: 75,
    question: "What is the 'protected' modifier in TypeScript?",
    answer: "A modifier that allows access in derived classes",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Protected members are accessible within the declaring class and its subclasses",
  },
  {
    id: 76,
    question: "What are mapped type modifiers in TypeScript?",
    answer: "Modifiers that change property modifiers in mapped types",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Mapped type modifiers like + and - can add or remove readonly and optional modifiers",
  },
  {
    id: 77,
    question: "What is the 'override' keyword in TypeScript?",
    answer: "A keyword that explicitly marks method overrides",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The override keyword ensures a method correctly overrides a base class method",
  },
  {
    id: 78,
    question: "What are index types in TypeScript?",
    answer: "Types that describe objects with dynamic property names",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Index types allow typing objects where property names follow a pattern",
  },
  {
    id: 79,
    question: "What is the 'static' keyword in TypeScript?",
    answer: "A keyword that defines class-level members",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Static members belong to the class itself rather than instances",
  },
  {
    id: 80,
    question: "What are type assertions in TypeScript?",
    answer: "Ways to tell the compiler to treat a value as a specific type",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Type assertions override TypeScript's inferred types using 'as' or angle bracket syntax",
  },
];

export const DSA_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question: "What is an array?",
    answer:
      "A linear data structure that stores elements in contiguous memory locations",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Arrays provide O(1) access time but have fixed size in many languages. Elements are stored sequentially in memory.",
  },
  {
    id: 2,
    question: "What is a linked list?",
    answer:
      "A linear data structure where elements are stored in nodes that point to the next node",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Linked lists allow dynamic size and O(1) insertion/deletion at known positions, but require O(n) access time.",
  },
  {
    id: 3,
    question: "What is a stack?",
    answer: "A LIFO (Last In First Out) data structure",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Stacks follow LIFO principle with push/pop operations. Common uses include function call stacks and undo operations.",
  },
  {
    id: 4,
    question: "What is a queue?",
    answer: "A FIFO (First In First Out) data structure",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Queues follow FIFO principle with enqueue/dequeue operations. Used in scheduling and breadth-first search.",
  },
  {
    id: 5,
    question: "What is a binary tree?",
    answer:
      "A hierarchical data structure where each node has at most two children",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Binary trees are used for efficient searching and sorting. Each node has left and right child pointers.",
  },
  {
    id: 6,
    question: "What is a hash table?",
    answer: "A data structure that maps keys to values using a hash function",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Hash tables provide O(1) average case lookup and insertion. They use a hash function to compute indices for key-value pairs.",
  },
  {
    id: 7,
    question: "What is a binary search?",
    answer:
      "A search algorithm that finds an item in a sorted array by repeatedly dividing the search space in half",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Binary search has O(log n) time complexity but requires sorted input. It compares target with middle element.",
  },
  {
    id: 8,
    question: "What is bubble sort?",
    answer:
      "A simple sorting algorithm that repeatedly steps through the list and swaps adjacent elements if they are in wrong order",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Bubble sort has O(n²) time complexity. It's simple but inefficient for large datasets.",
  },
  {
    id: 9,
    question: "What is quicksort?",
    answer:
      "A divide-and-conquer sorting algorithm that picks a pivot and partitions elements around it",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Quicksort has O(n log n) average case complexity. It's widely used due to good practical performance.",
  },
  {
    id: 10,
    question: "What is a graph?",
    answer: "A non-linear data structure consisting of vertices and edges",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Graphs represent relationships between objects. They can be directed/undirected and weighted/unweighted.",
  },
  {
    id: 11,
    question: "What is depth-first search (DFS)?",
    answer:
      "A graph traversal algorithm that explores as far as possible along each branch before backtracking",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "DFS uses a stack (implicit or explicit) and is useful for topological sorting and finding paths.",
  },
  {
    id: 12,
    question: "What is breadth-first search (BFS)?",
    answer:
      "A graph traversal algorithm that explores all vertices at present depth before moving to next level",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "BFS uses a queue and finds shortest paths in unweighted graphs. It explores nodes level by level.",
  },
  {
    id: 13,
    question: "What is dynamic programming?",
    answer:
      "A method for solving complex problems by breaking them down into simpler subproblems",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Dynamic programming uses memoization or tabulation to avoid redundant computations in overlapping subproblems.",
  },
  {
    id: 14,
    question: "What is a heap?",
    answer:
      "A specialized tree-based data structure that satisfies the heap property",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Heaps are used to implement priority queues. In a max heap, parent is greater than children; opposite for min heap.",
  },
  {
    id: 15,
    question: "What is merge sort?",
    answer:
      "A divide-and-conquer sorting algorithm that divides array into two halves and merges sorted halves",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Merge sort has O(n log n) time complexity and is stable. It requires O(n) extra space.",
  },
  {
    id: 16,
    question: "What is a trie?",
    answer:
      "A tree-like data structure used to store strings, where paths may share common prefixes",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Tries are efficient for string operations and commonly used in autocomplete and spell checkers.",
  },
  {
    id: 17,
    question: "What is Big O notation?",
    answer:
      "A mathematical notation that describes the upper bound of an algorithm's growth rate",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Big O notation helps compare algorithm efficiency by describing worst-case time/space complexity.",
  },
  {
    id: 18,
    question: "What is a balanced binary search tree?",
    answer:
      "A binary search tree that maintains O(log n) height after insertions and deletions",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Examples include AVL and Red-Black trees. They ensure efficient operations by maintaining balance.",
  },
  {
    id: 19,
    question: "What is Dijkstra's algorithm?",
    answer:
      "An algorithm for finding shortest paths between nodes in a weighted graph",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Dijkstra's algorithm uses a priority queue and works for graphs with non-negative edge weights.",
  },
  {
    id: 20,
    question: "What is the time complexity of binary search?",
    answer: "O(log n)",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Binary search divides search space in half each time, leading to logarithmic time complexity.",
  },
];

export const OOP_QUESTIONSTS: FlashCard[] = [
  {
    id: 1,
    question: "What is Object-Oriented Programming (OOP)?",
    answer: "A programming paradigm based on objects containing data and code",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "OOP organizes code into objects that contain both data (attributes) and behaviors (methods)",
  },
  {
    id: 2,
    question: "What is encapsulation in OOP?",
    answer:
      "The bundling of data and methods that operate on that data within a single unit",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Encapsulation helps hide internal details and protect data integrity through access control",
  },
  {
    id: 3,
    question: "What is inheritance in OOP?",
    answer:
      "A mechanism that allows a class to inherit properties and methods from another class",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Inheritance promotes code reuse and establishes relationships between classes",
  },
  {
    id: 4,
    question: "What is polymorphism in OOP?",
    answer:
      "The ability of objects to take multiple forms and respond differently to the same method call",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Polymorphism enables flexible and extensible code through method overriding and interfaces",
  },
  {
    id: 5,
    question: "What is abstraction in OOP?",
    answer:
      "The process of hiding complex implementation details and showing only necessary features",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Abstraction reduces complexity by hiding unnecessary details and focusing on essential characteristics",
  },
  {
    id: 6,
    question: "What is a class in OOP?",
    answer:
      "A blueprint for creating objects that defines their properties and behaviors",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Classes serve as templates for objects, defining their structure and capabilities",
  },
  {
    id: 7,
    question: "What is method overriding in OOP?",
    answer:
      "Providing a different implementation for a method in a subclass that is already defined in the parent class",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Method overriding allows subclasses to provide specific implementations of methods inherited from parent classes",
  },
  {
    id: 8,
    question: "What is method overloading in OOP?",
    answer:
      "Creating multiple methods with the same name but different parameters in the same class",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Method overloading provides different ways to call a method based on different parameter types or counts",
  },
  {
    id: 9,
    question: "What is an interface in OOP?",
    answer: "A contract that specifies what methods a class must implement",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Interfaces define a common structure that classes must follow, enabling polymorphism",
  },
  {
    id: 10,
    question: "What is composition in OOP?",
    answer:
      "A design principle where a class contains objects of other classes",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Composition represents 'has-a' relationships and provides more flexibility than inheritance",
  },
  {
    id: 11,
    question: "What is the Single Responsibility Principle?",
    answer: "A class should have only one reason to change",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "This principle promotes high cohesion and maintainable code by keeping classes focused",
  },
  {
    id: 12,
    question: "What is the Open/Closed Principle?",
    answer:
      "Software entities should be open for extension but closed for modification",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "This principle encourages adding new functionality through extension rather than changing existing code",
  },
  {
    id: 13,
    question: "What is the Liskov Substitution Principle?",
    answer:
      "Objects of a superclass should be replaceable with objects of its subclasses without breaking the application",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "This principle ensures that inheritance hierarchies are designed correctly",
  },
  {
    id: 14,
    question: "What is the Interface Segregation Principle?",
    answer:
      "Clients should not be forced to depend on interfaces they do not use",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "This principle promotes creating specific interfaces rather than one general-purpose interface",
  },
  {
    id: 15,
    question: "What is the Dependency Inversion Principle?",
    answer:
      "High-level modules should not depend on low-level modules; both should depend on abstractions",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "This principle reduces coupling between modules by introducing abstractions",
  },
  {
    id: 16,
    question: "What is a constructor in OOP?",
    answer: "A special method used to initialize objects when they are created",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Constructors set initial values and perform setup operations when an object is instantiated",
  },
  {
    id: 17,
    question: "What is the difference between abstract classes and interfaces?",
    answer:
      "Abstract classes can have implementation details while interfaces only declare method signatures",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Abstract classes provide a base implementation while interfaces define a contract",
  },
  {
    id: 18,
    question: "What is method chaining in OOP?",
    answer:
      "A programming pattern where multiple methods are called in a single line",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Method chaining improves code readability by returning this/self from methods",
  },
  {
    id: 19,
    question: "What is the difference between association and aggregation?",
    answer:
      "Association is a general relationship while aggregation implies ownership",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Aggregation is a specialized form of association representing a 'whole-part' relationship",
  },
  {
    id: 20,
    question: "What is the purpose of access modifiers in OOP?",
    answer: "To control the visibility and accessibility of class members",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Access modifiers (public, private, protected) help implement encapsulation and data hiding",
  },
];

export const DSA_PRINCIPLES_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question: "What does O(1) time complexity mean?",
    answer:
      "Constant time complexity - the operation takes the same amount of time regardless of input size",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation: "Examples include array access by index or hash table lookups",
  },
  {
    id: 2,
    question: "What does O(n) time complexity mean?",
    answer:
      "Linear time complexity - the time taken grows linearly with input size",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation: "Examples include traversing an array or linear search",
  },
  {
    id: 3,
    question: "What does O(n²) time complexity mean?",
    answer:
      "Quadratic time complexity - the time taken grows with the square of the input size",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Examples include nested loops and algorithms like bubble sort",
  },
  {
    id: 4,
    question: "What is space complexity?",
    answer:
      "The amount of memory space required by an algorithm relative to input size",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Includes both auxiliary space and space used by input",
  },
  {
    id: 5,
    question: "What is the difference between a stack and a queue?",
    answer:
      "Stack is LIFO (Last In First Out) while Queue is FIFO (First In First Out)",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Stack uses push/pop operations, Queue uses enqueue/dequeue operations",
  },
  {
    id: 6,
    question: "What is an array?",
    answer: "A collection of elements stored at contiguous memory locations",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation: "Provides O(1) access but O(n) insertion/deletion in middle",
  },
  {
    id: 7,
    question: "What is a linked list?",
    answer:
      "A linear data structure where elements are connected using pointers",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation: "Provides O(1) insertion/deletion but O(n) access time",
  },
  {
    id: 8,
    question: "What is the difference between O(1) and O(n) space complexity?",
    answer:
      "O(1) uses constant extra space while O(n) uses space proportional to input size",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "O(1) might use a few variables, O(n) might create an auxiliary array",
  },
  {
    id: 9,
    question: "What is a hash table?",
    answer:
      "A data structure that implements an associative array using a hash function",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Provides average O(1) insertion/deletion/search operations",
  },
  {
    id: 10,
    question: "What is the difference between O(n log n) and O(n²)?",
    answer: "O(n log n) grows much slower than O(n²) for large inputs",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "O(n log n) is characteristic of efficient sorting algorithms like merge sort",
  },
  {
    id: 11,
    question: "What is a binary tree?",
    answer: "A tree data structure where each node has at most two children",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Used in binary search trees, heap implementations",
  },
  {
    id: 12,
    question:
      "What is the difference between best case and worst case complexity?",
    answer:
      "Best case is minimum time/space needed, worst case is maximum time/space needed",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Big O notation typically describes worst case complexity",
  },
  {
    id: 13,
    question: "What is amortized time complexity?",
    answer:
      "The averaged time taken per operation over a sequence of operations",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Used for data structures like dynamic arrays where occasional operations are costly",
  },
  {
    id: 14,
    question: "What is the difference between a graph and a tree?",
    answer:
      "A tree is a connected graph without cycles, while graphs can have cycles",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Trees have exactly one path between any two nodes",
  },
  {
    id: 15,
    question: "What is recursion?",
    answer:
      "A method where the solution depends on solutions to smaller instances of the same problem",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Often used in tree/graph traversal and divide-and-conquer algorithms",
  },
  {
    id: 16,
    question: "What is the difference between stable and unstable sorting?",
    answer:
      "Stable sorting maintains relative order of equal elements, unstable may not",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Merge sort is stable, quick sort is typically unstable",
  },
  {
    id: 17,
    question: "What is a priority queue?",
    answer:
      "A queue where elements have priorities and higher priority elements are served first",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Often implemented using heaps, used in Dijkstra's algorithm",
  },
  {
    id: 18,
    question: "What is the difference between DFS and BFS?",
    answer:
      "DFS explores as far as possible along branches, BFS explores all neighbors first",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "DFS uses stack (or recursion), BFS uses queue",
  },
  {
    id: 19,
    question: "What is memoization?",
    answer:
      "An optimization technique storing results of expensive function calls",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Used in dynamic programming to avoid redundant computations",
  },
  {
    id: 20,
    question: "What is the time complexity of binary search?",
    answer: "O(log n) - the search space is halved in each step",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Requires sorted input array, very efficient for large datasets",
  },
];

export const NODE_JS_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question:
      "What are the differences between Fastify and Express? Why might you choose Fastify?",
    answer:
      "Fastify is faster, has built-in JSON schema validation, TypeScript support, and better async/await handling. Express is more mature with larger ecosystem.",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Fastify can be 2x faster than Express and has better developer experience for modern Node.js apps",
  },
  {
    id: 2,
    question: "How do you handle asynchronous operations in Node.js?",
    answer:
      "Using callbacks, Promises, async/await, or event emitters depending on the use case",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Modern Node.js prefers async/await for cleaner code and better error handling",
  },
  {
    id: 3,
    question: "Can you explain the Node.js event loop?",
    answer:
      "Single-threaded loop that handles callbacks, with phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "The event loop enables Node.js to perform non-blocking I/O operations despite being single-threaded",
  },
  {
    id: 4,
    question:
      "What is your approach to error handling in Node.js applications?",
    answer:
      "Use try-catch for async/await, .catch() for promises, error-first callbacks, and global error handlers for uncaught exceptions",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Proper error handling prevents crashes and provides meaningful feedback to users",
  },
  {
    id: 5,
    question: "How do you structure a scalable Node.js backend project?",
    answer:
      "Use layered architecture: routes, controllers, services, models. Separate concerns, use dependency injection, and modular design",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Good structure makes code maintainable, testable, and allows teams to work efficiently",
  },
  {
    id: 6,
    question: "What is the difference between require() and import in Node.js?",
    answer:
      "require() is CommonJS (synchronous), import is ES6 modules (asynchronous). Import supports tree shaking and static analysis",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "ES6 modules are the future standard, but CommonJS is still widely used in Node.js",
  },
  {
    id: 7,
    question: "How does Node.js handle child processes?",
    answer:
      "Using child_process module with spawn(), exec(), execFile(), and fork() methods for running external commands or Node.js scripts",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Child processes allow CPU-intensive tasks to run without blocking the main thread",
  },
  {
    id: 8,
    question: "What is clustering in Node.js?",
    answer:
      "Creating multiple worker processes that share the same server port to utilize multi-core systems effectively",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Clustering helps scale Node.js applications across multiple CPU cores",
  },
  {
    id: 9,
    question: "How do you implement authentication in Node.js?",
    answer:
      "Using JWT tokens, sessions, OAuth, or passport.js middleware with proper hashing (bcrypt) for passwords",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Security is crucial - never store plain text passwords and always validate tokens",
  },
  {
    id: 10,
    question: "What is middleware in Express.js?",
    answer:
      "Functions that execute during request-response cycle, having access to req, res, and next() function",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Middleware enables modular request processing like authentication, logging, and parsing",
  },
  {
    id: 11,
    question: "How do you handle file uploads in Node.js?",
    answer:
      "Using multer middleware for multipart/form-data, with options for memory or disk storage",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Always validate file types and sizes to prevent security vulnerabilities",
  },
  {
    id: 12,
    question: "What is the purpose of package.json?",
    answer:
      "Manifest file containing project metadata, dependencies, scripts, and configuration for Node.js projects",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Essential for dependency management and project configuration in Node.js ecosystem",
  },
  {
    id: 13,
    question: "How do you debug Node.js applications?",
    answer:
      "Using console.log, Node.js debugger, VS Code debugger, or tools like node --inspect for Chrome DevTools",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Proper debugging tools save significant development time and help identify issues quickly",
  },
  {
    id: 14,
    question: "What is npm and what are its alternatives?",
    answer:
      "Node Package Manager for installing dependencies. Alternatives include Yarn, pnpm, and Bun for faster performance",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Package managers handle dependency resolution, version management, and script execution",
  },
  {
    id: 15,
    question: "How do you handle environment variables in Node.js?",
    answer:
      "Using process.env object, often with dotenv package to load variables from .env files",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Environment variables keep sensitive data out of source code and enable different configurations",
  },
  {
    id: 16,
    question:
      "What is the difference between process.nextTick() and setImmediate()?",
    answer:
      "process.nextTick() executes before I/O events, setImmediate() executes after I/O events in the event loop",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Understanding execution order is crucial for proper async flow control",
  },
  {
    id: 17,
    question: "How do you implement caching in Node.js?",
    answer:
      "Using in-memory caching (Map, LRU cache), Redis, or HTTP caching headers depending on requirements",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Caching improves performance by reducing database queries and computation",
  },
  {
    id: 18,
    question: "What is streaming in Node.js?",
    answer:
      "Processing data piece by piece instead of loading everything into memory, using readable, writable, and transform streams",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Streams are memory-efficient for handling large files or real-time data",
  },
  {
    id: 19,
    question: "How do you test Node.js applications?",
    answer:
      "Using testing frameworks like Jest, Mocha, or Vitest with assertion libraries and mocking for unit and integration tests",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation: "Testing ensures code reliability and makes refactoring safer",
  },
  {
    id: 20,
    question: "What is the role of libuv in Node.js?",
    answer:
      "C library providing asynchronous I/O operations, event loop implementation, and cross-platform compatibility",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "libuv is the foundation that enables Node.js's non-blocking I/O capabilities",
  },
];

export const NEXT_JS_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question:
      "What is Next.js and what are its main benefits over plain React?",
    answer:
      "A React framework that provides server-side rendering, static site generation, file-based routing, and built-in optimizations",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Next.js offers better SEO, faster initial page loads, automatic code splitting, and simplified deployment compared to plain React",
  },
  {
    id: 2,
    question: "What's the difference between SSR, SSG, and CSR in Next.js?",
    answer:
      "SSR renders on server per request, SSG pre-renders at build time, CSR renders on client side",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Choose SSG for static content, SSR for dynamic content that needs SEO, CSR for highly interactive apps",
  },
  {
    id: 3,
    question: "How does file-based routing work in Next.js?",
    answer:
      "Pages are automatically routed based on file structure in the pages/ or app/ directory",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "pages/about.js becomes /about route, pages/blog/[slug].js creates dynamic routes",
  },
  {
    id: 4,
    question: "What are Server Actions in Next.js?",
    answer:
      "Functions that run on the server and can be called directly from client components, replacing traditional API routes for simple operations",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Server Actions simplify form handling and data mutations without creating separate API endpoints",
  },
  {
    id: 5,
    question:
      "What is Image optimization in Next.js and how does it help with performance?",
    answer:
      "Next.js Image component automatically optimizes images by serving them in modern formats (WebP, AVIF), resizing based on device, lazy loading by default, and providing responsive images. It reduces bundle size and improves Core Web Vitals by preventing layout shift and reducing load times.",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "The next/image component handles optimization automatically, unlike regular img tags",
  },
  {
    id: 6,
    question: "What is lazy loading in Next.js and when should you use it?",
    answer:
      "Lazy loading defers loading of components or resources until they're needed, typically when they enter the viewport. Next.js supports lazy loading through dynamic imports for components and automatic lazy loading for images. Use it for heavy components, images below the fold, or features that aren't immediately visible.",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Lazy loading reduces initial bundle size and improves Time to Interactive (TTI)",
  },
  {
    id: 7,
    question: "What is code splitting in Next.js and how does it work?",
    answer:
      "Code splitting breaks your application into smaller chunks that are loaded on demand. Next.js automatically splits code by pages and supports dynamic imports for components. Each page only loads the JavaScript it needs, reducing initial bundle size and improving performance.",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Automatic code splitting means users only download code for the pages they visit",
  },
  {
    id: 8,
    question:
      "What is static generation in Next.js and what are its performance benefits?",
    answer:
      "Static generation pre-renders pages at build time, creating HTML files that can be served instantly from a CDN. It provides the fastest possible loading times, better SEO, and reduced server load since pages don't need to be rendered on each request.",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Static pages can be cached globally and served with minimal latency",
  },
  {
    id: 9,
    question: "How does caching work in Next.js for performance optimization?",
    answer:
      "Next.js implements multiple caching layers: automatic static optimization caches static pages, API routes can use cache headers, the Image component caches optimized images, and the build process caches unchanged pages. You can also implement custom caching strategies using headers or third-party solutions.",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Effective caching reduces server load and improves user experience with faster page loads",
  },
  {
    id: 10,
    question:
      "What is bundle analysis in Next.js and how do you use it to improve performance?",
    answer:
      "Bundle analysis examines your application's JavaScript bundles to identify large dependencies, unused code, and optimization opportunities. Use @next/bundle-analyzer to visualize bundle sizes, identify heavy libraries, find duplicate dependencies, and optimize imports to reduce overall bundle size.",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Bundle analysis helps identify performance bottlenecks and guides optimization decisions",
  },
  {
    id: 6,
    question: "What is the App Router in Next.js 13+?",
    answer:
      "New routing system using app/ directory with layouts, loading states, and React Server Components",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "App Router provides better developer experience with nested layouts and streaming",
  },
  {
    id: 7,
    question: "How do you handle state management in Next.js projects?",
    answer:
      "Using React state, Context API, Zustand, Redux Toolkit, or server state libraries like React Query",
    difficulty: 2,
    nextShowTime: Date.now(),
    explanation:
      "Choice depends on complexity: local state for simple cases, global state managers for complex apps",
  },
  {
    id: 8,
    question: "What are React Server Components in Next.js?",
    answer:
      "Components that render on the server, reducing client-side JavaScript and improving performance",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "Server Components can directly access databases and APIs without exposing sensitive data to the client",
  },
  {
    id: 9,
    question: "How do you implement API routes in Next.js?",
    answer:
      "Create files in pages/api/ or app/api/ directory that export handler functions",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "API routes run on the server and can handle HTTP methods like GET, POST, PUT, DELETE",
  },
  {
    id: 10,
    question: "What is Incremental Static Regeneration (ISR)?",
    answer:
      "Feature that allows updating static pages after build time without rebuilding the entire site",
    difficulty: 3,
    nextShowTime: Date.now(),
    explanation:
      "ISR combines benefits of static generation with dynamic content updates",
  },
];

export const NODE_JS_EASY_QUESTIONS: FlashCard[] = [
  {
    id: 1,
    question: "What is Node.js?",
    answer:
      "A JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server side",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Node.js enables full-stack JavaScript development and is known for its event-driven, non-blocking I/O model",
  },
  {
    id: 2,
    question: "What is npm?",
    answer:
      "Node Package Manager - a package manager for JavaScript that comes with Node.js",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "npm allows you to install, share, and manage dependencies in your Node.js projects",
  },
  {
    id: 3,
    question: "How do you create a simple HTTP server in Node.js?",
    answer:
      "Using the http module: const http = require('http'); http.createServer((req, res) => { res.end('Hello World'); }).listen(3000);",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "The http module is built into Node.js and provides basic server functionality",
  },
  {
    id: 4,
    question: "What is package.json?",
    answer:
      "A file that contains metadata about a Node.js project including dependencies, scripts, and project information",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "package.json is essential for managing project dependencies and configuration",
  },
  {
    id: 5,
    question: "How do you install a package using npm?",
    answer: "npm install package-name (or npm i package-name for short)",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Use --save-dev flag for development dependencies, packages are installed to node_modules folder",
  },
  {
    id: 6,
    question: "What is the difference between require() and import?",
    answer:
      "require() is CommonJS syntax (traditional Node.js), import is ES6 modules syntax (modern JavaScript)",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "Node.js supports both, but you need to configure package.json for ES6 modules",
  },
  {
    id: 7,
    question: "How do you read a file in Node.js?",
    answer:
      "Using fs module: const fs = require('fs'); fs.readFile('file.txt', 'utf8', (err, data) => { console.log(data); });",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "fs module provides both synchronous and asynchronous file operations",
  },
  {
    id: 8,
    question: "What is module.exports?",
    answer:
      "An object that defines what a module exports and makes available to other files when required",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "module.exports allows you to share functions, objects, or values between files",
  },
  {
    id: 9,
    question: "How do you handle command line arguments in Node.js?",
    answer:
      "Using process.argv array which contains command line arguments passed to the Node.js process",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "process.argv[0] is node path, process.argv[1] is script path, arguments start from index 2",
  },
  {
    id: 10,
    question: "What is the purpose of node_modules folder?",
    answer:
      "It stores all the installed npm packages and their dependencies for a project",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "node_modules should not be committed to version control, use package.json to track dependencies",
  },
  {
    id: 11,
    question: "How do you start a Node.js application?",
    answer: "Using 'node filename.js' command in the terminal",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "You can also define scripts in package.json and run them with 'npm run script-name'",
  },
  {
    id: 12,
    question: "What is console.log() used for in Node.js?",
    answer:
      "To print output to the terminal/console for debugging and logging purposes",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "console.log() works the same in Node.js as in browser JavaScript",
  },
  {
    id: 13,
    question: "How do you create a new Node.js project?",
    answer:
      "Run 'npm init' in a new folder to create package.json and set up the project structure",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "npm init -y creates a package.json with default values without prompting questions",
  },
  {
    id: 14,
    question: "What is the path module used for?",
    answer: "Working with file and directory paths in a cross-platform way",
    difficulty: 1,
    nextShowTime: Date.now(),
    explanation:
      "path module provides utilities like path.join(), path.resolve(), and path.dirname() for handling file paths",
  },
];

// What’s your experience with Next.js? What’s the benefit of using it over plain React?

// How do you handle state management in React/Next.js projects?

// What are server actions and how do they differ from traditional API routes?

// How would you optimize a page that’s loading slowly in Next.js?

// What’s the difference between SSR, SSG, and CSR? When would you use each?

// How would you design an API endpoint to fetch farm data or pesticide recommendations?

// What is the difference between REST and GraphQL?

// How do you handle authentication and protect APIs (e.g., JWT vs Firebase)?

// Can you explain how a refresh token flow works?

// Have you worked with PostgreSQL or PostGIS (for geospatial data)?

// What are joins, and when would you use them?

// How do you ensure data integrity or avoid duplicates in a relational database?
