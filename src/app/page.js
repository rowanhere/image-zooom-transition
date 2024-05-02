"use client";
export default function Home() {
  const saleDetails = [
    {
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMTU5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMTU5Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 p-4 lg:w-[60%]">
      {saleDetails.map((details, index) => {
        return (
          <div
            key={index}
            className="bg-dark text-white shadow-2xl h-[500px] rounded-lg
             overflow-hidden "
          >
            <div className=" h-[50%] overflow-hidden">
              <img
                src={details.image}
                alt="image"
                className="w-full h-full object-cover cursor-pointer hover:scale-125 transition-all duration-500"
              />
            </div>
            <p className=" font-mono ml-1  mt-2 text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam fugiat, quidem, pariatur saepe quisquam dolores tenetur
              molestiae provident unde non expedita maiores iusto ipsa aliquid
              molestias magni dolorem consequuntur qui?
            </p>
            <div className="font-mono">
              <button className="bg-blue-400 rounded-md shadow-lg border text-white mx-4 mt-4 py-2 px-4 hover:bg-transparent hover:text-blue-400 hover:border-blue-400 hover:border transition-all duration-500">
                Details
              </button>
              <button className=" rounded-md shadow-lg py-2 px-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-500">
                Conatct Seller
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
