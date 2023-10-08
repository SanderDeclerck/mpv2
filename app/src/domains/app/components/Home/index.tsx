import { Breadcrumb } from "@/components/Breadcrumb";

export const Home = () => (
  <div>
    <Breadcrumb />
    <h1>Welcome to MPV2</h1>

    <p className="mt-8 mb-2">Working pages:</p>
    <ul>
      <li className="list-disc list-inside">Triggers and actions</li>
      <li className="list-disc list-inside">
        About (long page + url update stuff)
      </li>
    </ul>
  </div>
);
