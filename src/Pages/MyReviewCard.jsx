import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewCard = ({ myRev, myReview, setMyReview }) => {
  const { _id, propertyName, category, price, location, image, userEmail } = myRev;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This property will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myProperties/${_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Property has been deleted successfully.",
                icon: "success",
              });
              const remaining = myReview.filter((rev) => rev._id !== _id);
              setMyReview(remaining);
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-11/12 mx-auto mt-6">
      <table className="table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Location</th>
            <th>Update / Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Property Info */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={image} alt="Property" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{propertyName}</div>
                  <div className="text-sm opacity-70">{userEmail}</div>
                </div>
              </div>
            </td>

            <td>{category}</td>
            <td>${price}</td>
            <td>{location}</td>

            <td>
              <div className="flex items-center gap-2">
                <Link to={`/updateProperty/${_id}`}>
                  <button className="btn bg-gray-800 text-white btn-sm">
                    Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-[#EA4744] hover:bg-red-600 text-white btn-sm"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyReviewCard;
