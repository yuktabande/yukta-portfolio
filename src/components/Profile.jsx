function Profile() {
  return (
    <div>
      <div className="rounded-xl bg-white shadow-md p-6  mx-auto mt-10 flex flex-col md:flex-row items-center gap-24">
        {/* Left Side - Picture */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/src/assets/profile.png"
            alt="Yukta Bande"
            className="rounded-full w-54 h-54 object-cover"
          />
        </div>

        {/* Right Side - Text Info */}
        <div className="w-full md:w-2/3 text-left space-y-3">
          <h1 className="text-3xl font-bold">Yukta Bande</h1>
          <p>
            Email: <span className="font-semibold">@yuktaabande@gmail.com</span>
          </p>
          <p>
            Location: <span className="font-semibold">Pune, India</span>
          </p>
          <p>
            Role:{" "}
            <span className="font-semibold">AI Developer & Data Analyst</span>
          </p>
          <p>
            Interests:{" "}
            <span className="font-semibold">
              Design, AI, Human-Computer Interaction
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
