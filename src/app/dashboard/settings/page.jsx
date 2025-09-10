const page = () => {
  return (
    <div className="p-4 text-white/80">
      <h2 className="text-xl font-semibold">Settings</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-medium">Notifications</h3>
          <p className="mt-1 text-sm text-white/60">Configure in-app alerts.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-medium">Profile</h3>
          <p className="mt-1 text-sm text-white/60">Update your name and avatar.</p>
        </div>
      </div>
    </div>
  );
};

export default page;
