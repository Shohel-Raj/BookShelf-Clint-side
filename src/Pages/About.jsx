import React, { useEffect, useState } from "react";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Loader from "../Component/Loader/Loader";

const About = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `BOOKSHELF | About Us`;

    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <div className="text-center my-3.5">
        <h1 className="font-bold text-2xl md:text-3xl uppercase italic mb-3">
          Meet our team
        </h1>
        <p className="md:w-3/4 mx-auto mb-3 small">
          Where book lovers gather, explore, and share. Bookshelf is your
          digital library to discover, upvote, and celebrate great reads
          together.
        </p>
      </div>

      <section className="py-6 ">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {team.map((cat) => (
              <div
                key={cat.id}
                className="card card-side bg-base-100 dark:bg-gray-800 shadow-sm"
              >
                <figure className="h-60 w-56">
                  <img
                    className="h-full w-full object-cover object-top"
                    src={cat.img}
                    alt={cat.name}
                  />
                </figure>
                <div className="card-body">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-xl font-semibold card-title">
                      {cat.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cat.role}
                    </p>
                    <div className="flex mt-2 space-x-2">
                      {cat.twitter && (
                        <a
                          href={cat.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Twitter"
                        >
                          <FaTwitterSquare size={20} />
                        </a>
                      )}
                      {cat.linkedin && (
                        <a
                          href={cat.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="LinkedIn"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      )}
                      {cat.github && (
                        <a
                          href={cat.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                        >
                          <FaGithubSquare size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
