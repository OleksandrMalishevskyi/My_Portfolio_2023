import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import styled from "styled-components";
import { socialMediaLinks } from "../../portfolio";

import "./SocialMedia.css";

const IconWrapper = styled.span`
  .icon {
    color: white;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 25%;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.6rem;
    margin: 0 5px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 10px;
  }

  &:hover .icon {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

library.add(fab);

const SocialMedia = (props) => {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            key={media.link}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <FontAwesomeIcon
                icon={['fab', `${media.fontAwesomeIcon}`]}
                className="icon"
              />
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia