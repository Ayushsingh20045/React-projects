
import React, { useEffect, useState } from 'react';

const Github = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/Ayushsingh20045')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error("Error fetching GitHub data:", error));
  }, [data]);

  return (
    <div className="flex flex-col items-center bg-white min-h-screen text-gray-800 p-6">
      <h1 className="text-4xl font-bold mb-6">My GitHub Profile</h1>

      {/* Profile Avatar */}
      
      <img 
        src={data.avatar_url} 
        alt="Profile" 
        className="w-32 h-32 rounded-full shadow-md border-4 border-blue-500 mb-4"
      />

      {/* Bio */}
      <p className="text-lg mb-2 font-medium text-center max-w-xl">
        {data.bio || 'Loading bio...'}
      </p>

      {/* Profile Views */}

      <div className="mb-6">
        <img
          src="https://komarev.com/ghpvc/?username=Ayushsingh20045&label=Profile%20views&color=0e75b6&style=flat"
          alt="Profile Views"
          className="mx-auto"
        />
      </div>

      {/* GitHub Stats */}
     
      <div className="flex flex-col items-center gap-4">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=Ayushsingh20045&show_icons=true&theme=default`}
          alt="GitHub Stats"
          className="rounded-lg"
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=Ayushsingh20045&theme=default`}
          alt="GitHub Streak"
          className="rounded-lg"
        />

        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Ayushsingh20045&layout=compact&theme=default`}
          alt="Top Languages"
          className="rounded-lg"
        />
      </div>

      {/* Contribution Graph */}
      <div className="mt-10">
        <h2 className="text-2xl mb-4 font-semibold">Contribution Graph</h2>
        <img
          src={`https://ghchart.rshah.org/1f2937/${data.login}`}
          alt="GitHub contributions graph"
          className="mx-auto border rounded bg-gray-100 p-2"
        />
      </div>

      {/* Visit GitHub Button */}
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition"
      >
        Visit My GitHub Profile
      </a>
    </div>
  );
};

export default Github;
