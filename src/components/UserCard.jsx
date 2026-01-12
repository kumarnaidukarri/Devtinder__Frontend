// UserCard Component.   n user cards are shown in the 'Feed' component.

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, about, skills, _id, age, gender } =
    user;

  // DaisyUI component - Card
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src={
            user.photoUrl ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {
          // if age and gender value exists. then, only render.
          age && gender && <p>{age + ", " + gender}</p>
        }
        <p>{about || "about me no data ..."}</p>
        <div className="card-actions justify-center  my-4">
          <button className="btn btn-secondary">Interested</button>
          <button className="btn btn-primary">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
