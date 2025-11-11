import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Router/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContex);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    if (user?.userEmail) {
      fetch(`http://localhost:5000/myProperties?email=${user.userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          setMyReview(data);
        });
    }
  }, [user]);

  return (
    <div className="py-5 mt-20">
      {myReview.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No properties found.</p>
      ) : (
        myReview.map((myRev) => (
          <MyReviewCard
            key={myRev._id}
            myRev={myRev}
            myReview={myReview}
            setMyReview={setMyReview}
          />
        ))
      )}
    </div>
  );
};

export default MyReview;
