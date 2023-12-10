import  { useState } from 'react';

const StudentSignUp = () => {
  const [collegeName, setCollegeName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleCollegeInputChange = (event) => {
    const value = event.target.value.trim();
    setCollegeName(value);

    if (value === '') {
      setSuggestions([]);
      return;
    }
    const apiUrl = `http://universities.hipolabs.com/search?country=India&name=${value}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setSuggestions(data.map(college => college.name));
      })
      .catch(error => {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      });
  };

  const handleSuggestionClick = (suggestion) => {
    setCollegeName(suggestion);
    setSuggestions([]);
  };


  return (
    <> 
           <div className="mt-2 relative">
                <input id="collegeName" name="collegeName" type="text" autoComplete="off"
                  value={collegeName}
                  onChange={handleCollegeInputChange}
                  className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {suggestions.length > 0 && (
                  <ul className="absolute z-10 left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="suggestionItem cursor-pointer px-3 py-1"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
           </div>
    </>
  );
};
export default StudentSignUp

            
