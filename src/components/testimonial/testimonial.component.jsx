import React from "react";
// import Avater from "../../assets/User_Avatar-removebg-preview (1).png";

export default class Testimonial extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  componentDidMount() {
    fetch(
      "https://cors.bridged.cc/https://dummyapi.io/data/api/user?limit=10",
      {
        headers: { "app-id": "6067a25314e282295e31b84c" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ person: data.data, loading: false });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1 className="p-6 font-bold text-3xl" style={{ color: "#2F1893" }}>
              Testimonials
            </h1>
            <div className="grid grid-cols-2 gap-0 md:grid-cols-2 place-items-center">
              {this.state.person
                .filter((person, index) => index < 4)
                .map((person) => (
                  <div className="flex" key={person.id}>
                    <div className="">
                      <div className="px-10 flex items-center justify-center">
                        <div className="flex justify-center py-2">
                          <img
                            className="h-20 w-20 rounded-full mb-2"
                            src={person.picture}
                            alt="avatar"
                          />
                        </div>
                        <div className="py-4">
                          <div className="flex jusify-center py-4 text-gray-400 text-left pl-8 leading-relaxed">
                            <p>
                              Extremely easy to use, helped us develop <br />{" "}
                              our Vote for George Washington micro-site <br />{" "}
                              extre-mely quickly! We will definitely use it
                              <br />
                              again for other projects.
                            </p>
                          </div>
                          <div className="text-sm font-extrabold flex justify-left text-blue-900 pl-8 uppercase">
                            {`${person.firstName} ${person.lastName}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
