import React from "react";
import {AiOutlineCheck} from "react-icons/ai";
import {FcCancel} from 'react-icons/fc'

const pricingData = [
  {
    title: "Basic",
    price: 200,
    feature: [
      { icon: <AiOutlineCheck/>, text: "Weekly reward for improvement" },
      { icon: <AiOutlineCheck/>, text: "one on one instruction with instructor" },
      { icon: <AiOutlineCheck/>, text: "Weekly reward for improvement" },
      { icon: <FcCancel/>, text: "Weekly reward for improvement" },
      { icon: <FcCancel/>, text: "Weekly reward for improvement" },
    ],
  },
  {
    title: "Standard",
    price: 500,
    feature: [
      { icon: <AiOutlineCheck/>, text: "Weekly reward for improvement" },
      { icon: <AiOutlineCheck/>, text: "one on one instruction with instructor" },
      { icon: <AiOutlineCheck/>, text: "Weekly reward for improvement" },
      { icon: <FcCancel/>, text: "free training workshop" },
      { icon: <FcCancel/>, text: "free training materials" },
    ],
  },
  {
    title: "Premium",
    price: 1000,
    feature: [
      { icon: <AiOutlineCheck/>, text: "Weekly reward for improvement" },
      { icon: <AiOutlineCheck/>, text: "one on one instruction with instructor" },
      { icon: <AiOutlineCheck/>, text: "Weekly reward for improvement" },
      { icon: <AiOutlineCheck/>, text: "Weekly reward for improvement" },
      { icon: <AiOutlineCheck/>, text: "Weekly reward for improvement" },
    ],
  }
];

const Testing = () => {
  return <div className="grid grid-cols-3 gap-5">
    {pricingData.map(p =>{
        const {title, price, feature} = p

        return <div className="p-2 border rounded border-gray-300">
            <h2>{title}</h2>
            <h3>{price}</h3>
            <ul>
                {feature.map(ft => {
                    const {icon, text} = ft
                    return <li className="flex gap-2">
                        <div>{icon}</div>
                        <p>{text}</p>
                    </li>
                })}
            </ul>

        </div>
    })}
  </div>;
};

export default Testing;
