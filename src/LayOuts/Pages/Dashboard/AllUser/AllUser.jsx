import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaRegTrashAlt, FaRegUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);

      Swal.fire({
        title: "Are you sure?",
        text: `Do you wanna make ${user.name} an admin!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Make Admin",
      }).then((result) => {
        if (result.isConfirmed) {
          refetch();
          Swal.fire({
            title: "Admin Created Succesfully!",
            text: `${user.name} Became Admin!`,
            icon: "success",
          });
        }
      });
    });
  };

  //   const handleMakeAdmin = user => {
  //   axiosSecure.patch(`/users/admin/${user._id}`)
  //   .then(res=> {
  //       console.log(res.data)
  //       Swal.fire({
  //         title: "Are you sure?",
  //         text: `Do you wanna make ${user.name} an admin!`,
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Make Admin",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           Swal.fire({
  //             title: "Admin Created Succesfully!",
  //             text: `${user.name} Became Admin!`,
  //             icon: "success",
  //           });
  //         }
  //       });
  //   })
  //   }

  return (
    <div className="my-8">
      <div className="mx-auto text-center w-3/12">
        <p className="text-orange-300">---How many??---</p>
        <div className="divider "></div>
        <h1 className="text-4xl">MANAGE ALL USERS</h1>
        <div className="divider "></div>
      </div>
      <div className="p-8">
        <h1 className="text-4xl uppercase">Total Users: {users.length}</h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial No:</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => {
                            handleMakeAdmin(user);
                          }}
                          className="btn bg-orange-300 btn-square"
                        >
                          <FaRegUser />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleDeleteUser(user);
                        }}
                        className="btn bg-red-600 text-white btn-square"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
//
