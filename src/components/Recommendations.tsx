import React from "react";

export default function Recommendations() {
  const cards = [
    {
      title: "Lorem Ipsum",
      color: "bg-red-500",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscfhnfgn hfgfh;lgmh h pthjgprthuyptih tphjtphujt hpthtpihtr htphjrpthjtrph tphjtphojtrphjtrphjtrph trhptjhptjht rh ing elit.",
    },
    {
      title: "Lorem Ipsum",
      color: "bg-blue-900",
      text: "Viverra vghopjthptg hotgihjotrihj trohijtroihjotrh troihotihortjheprthjptrohrt hirthjrtijtrhijrthitr hiorthoighrtogh rtpohjptoijht rhrtiojhtrijh trhporthsoitrhoitrjh rodthjoditghoitgj hel morbi curabitur.",
    },
    {
      title: "Lorem Ipsum",
      color: "bg-orange-500",
      text: "Felis yjlgkhjng hoitrjpgpsthprihg otihgoith tihjoitrh troihjtoirhjoithjoitjh toihjiotgithpws[truhoit rhoitroihoitrhotr hijtrih triohjitrhj tihojtiorhjtroihj troihhgug oihgoth gtog arcu magna mus.",
    },
    {
      title: "Lorem Ipsum",
      color: "bg-red-500",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum",
      color: "bg-blue-900",
      text: "Viverra vel morbi curabitur.",
    },
    {
      title: "Lorem Ipsum",
      color: "bg-orange-500",
      text: "Felis arcu magna mus.",
    },
  ];

  return (
    <section
      id="recommendations"
      className="py-16 px-8 bg-gray-100 mt-8 sm:mt-2 md:mt-4 lg:mt-12"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Recommendations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-[35px] shadow-md ${card.color} text-white text-center`}
          >
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
