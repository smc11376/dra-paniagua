import {socialprofils} from "@/content_option";
import {FaInstagram,} from "react-icons/fa";
import "./style.css";

export const Socialicons = (_params: any) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram} target="_blank">
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>Sígueme</p>
    </div>
  );
};
