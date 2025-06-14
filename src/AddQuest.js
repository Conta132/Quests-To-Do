import { useState } from "react";

function AddQuest(props) {
  const [title, setTitle] = useState();
  return (
    <div className="flex gap-4 w-full justify-center items-center">
      <input
        placeholder="quest"
        className="rounded-full bg-secundary pl-2 input-sm flex w-[70%] focus:outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="flex items-center text-center rounded-full bg-primary h-fit px-2 text-lg transform ease-out duration-300"
        onClick={() => props.saveAddQuest(title)}
      >
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44771 1 1v3M3 9v9c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1V9M3 9h18M8 9V5m4 4V5m4 4V5m-6 9h2m0 0h2m-2 0v-2m0 2v2" />
        </svg>

      </button>
    </div>
  );
}

export default AddQuest;
