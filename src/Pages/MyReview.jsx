import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Router/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContex);
  // console.log(user.email);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myProperties?email=${user.email}`)
      .then((req) => req.json())
      .then((data) => {
        setMyReview(data);
      });
  }, [user]);

  return (
    <div className=" py-5 mt-20">
      {myReview.map((myRev) => (
        <MyReviewCard
          key={myRev._id}
          myRev={myRev}
          myReview={myReview}
          setMyReview={setMyReview}></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReview;
