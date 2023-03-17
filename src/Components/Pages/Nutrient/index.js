import "./style.css";


export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32" id="resources">
            <div className="mx-auto max-w-7xl px-6 lg:px-8"></div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
        Enter the name of the Food
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
         <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="example, cake"
          />
        </div>
      </div>
      <div></div>
      </div>
    )
  }
  