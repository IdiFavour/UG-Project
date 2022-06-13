<template>
  <div data-v-10060cf4="" class="window-container">
    <div
      data-v-10060cf4=""
      class="vac-card-window"
      style="
        height: calc(100vh - 80px);
        --chat-color: #0a0a0a;
        --chat-color-button-clear: #1976d2;
        --chat-color-button: #fff;
        --chat-bg-color-button: #1976d2;
        --chat-bg-color-input: #fff;
        --chat-color-spinner: #333;
        --chat-color-placeholder: #9ca6af;
        --chat-color-caret: #1976d2;
        --chat-border-style: 1px solid #e1e4e8;
        --chat-bg-scroll-icon: #fff;
        --chat-container-border: none;
        --chat-container-border-radius: 4px;
        --chat-container-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        --chat-header-bg-color: #fff;
        --chat-header-color-name: #0a0a0a;
        --chat-header-color-info: #9ca6af;
        --chat-footer-bg-color: #f8f9fa;
        --chat-border-style-input: 1px solid #e1e4e8;
        --chat-border-color-input-selected: #1976d2;
        --chat-footer-bg-color-reply: #e5e5e6;
        --chat-footer-bg-color-tag-active: #e5e5e6;
        --chat-footer-bg-color-tag: #f8f9fa;
        --chat-content-bg-color: #f8f9fa;
        --chat-sidemenu-bg-color: #fff;
        --chat-sidemenu-bg-color-hover: #f6f6f6;
        --chat-sidemenu-bg-color-active: #e5effa;
        --chat-sidemenu-color-active: #1976d2;
        --chat-sidemenu-border-color-search: #e1e5e8;
        --chat-dropdown-bg-color: #fff;
        --chat-dropdown-bg-color-hover: #f6f6f6;
        --chat-message-bg-color: #fff;
        --chat-message-bg-color-me: #ccf2cf;
        --chat-message-color-started: #9ca6af;
        --chat-message-bg-color-deleted: #dadfe2;
        --chat-message-bg-color-selected: #c2dcf2;
        --chat-message-color-deleted: #757e85;
        --chat-message-color-username: #9ca6af;
        --chat-message-color-timestamp: #828c94;
        --chat-message-bg-color-date: #e5effa;
        --chat-message-color-date: #505a62;
        --chat-message-bg-color-system: #e5effa;
        --chat-message-color-system: #505a62;
        --chat-message-color: #0a0a0a;
        --chat-message-bg-color-media: rgba(0, 0, 0, 0.15);
        --chat-message-bg-color-reply: rgba(0, 0, 0, 0.08);
        --chat-message-color-reply-username: #0a0a0a;
        --chat-message-color-reply-content: #6e6e6e;
        --chat-message-color-tag: #0d579c;
        --chat-message-bg-color-image: #ddd;
        --chat-message-color-new-messages: #1976d2;
        --chat-message-bg-color-scroll-counter: #0696c7;
        --chat-message-color-scroll-counter: #fff;
        --chat-message-bg-color-reaction: #eee;
        --chat-message-border-style-reaction: 1px solid #eee;
        --chat-message-bg-color-reaction-hover: #fff;
        --chat-message-border-style-reaction-hover: 1px solid #ddd;
        --chat-message-color-reaction-counter: #0a0a0a;
        --chat-message-bg-color-reaction-me: #cfecf5;
        --chat-message-border-style-reaction-me: 1px solid #3b98b8;
        --chat-message-bg-color-reaction-hover-me: #cfecf5;
        --chat-message-border-style-reaction-hover-me: 1px solid #3b98b8;
        --chat-message-color-reaction-counter-me: #0b59b3;
        --chat-message-bg-color-audio-record: #eb4034;
        --chat-message-bg-color-audio-line: rgba(0, 0, 0, 0.15);
        --chat-message-bg-color-audio-progress: #455247;
        --chat-message-bg-color-audio-progress-selector: #455247;
        --chat-message-color-file-extension: #757e85;
        --chat-markdown-bg: rgba(239, 239, 239, 0.7);
        --chat-markdown-border: rgba(212, 212, 212, 0.9);
        --chat-markdown-color: #e01e5a;
        --chat-markdown-color-multi: #0a0a0a;
        --chat-room-color-username: #0a0a0a;
        --chat-room-color-message: #67717a;
        --chat-room-color-timestamp: #a2aeb8;
        --chat-room-color-online: #4caf50;
        --chat-room-color-offline: #9ca6af;
        --chat-room-bg-color-badge: #0696c7;
        --chat-room-color-badge: #fff;
        --chat-emoji-bg-color: #fff;
        --chat-icon-color-search: #9ca6af;
        --chat-icon-color-add: #1976d2;
        --chat-icon-color-toggle: #0a0a0a;
        --chat-icon-color-menu: #0a0a0a;
        --chat-icon-color-close: #9ca6af;
        --chat-icon-color-close-image: #fff;
        --chat-icon-color-file: #1976d2;
        --chat-icon-color-paperclip: #1976d2;
        --chat-icon-color-close-outline: #000;
        --chat-icon-color-close-preview: #fff;
        --chat-icon-color-send: #1976d2;
        --chat-icon-color-send-disabled: #9ca6af;
        --chat-icon-color-emoji: #1976d2;
        --chat-icon-color-emoji-reaction: rgba(0, 0, 0, 0.3);
        --chat-icon-color-document: #1976d2;
        --chat-icon-color-pencil: #9e9e9e;
        --chat-icon-color-checkmark: #9e9e9e;
        --chat-icon-color-checkmark-seen: #0696c7;
        --chat-icon-color-eye: #fff;
        --chat-icon-color-dropdown-message: #fff;
        --chat-icon-bg-dropdown-message: rgba(0, 0, 0, 0.25);
        --chat-icon-color-dropdown-room: #9e9e9e;
        --chat-icon-color-dropdown-scroll: #0a0a0a;
        --chat-icon-color-microphone: #1976d2;
        --chat-icon-color-audio-play: #455247;
        --chat-icon-color-audio-pause: #455247;
        --chat-icon-color-audio-cancel: #eb4034;
        --chat-icon-color-audio-confirm: #1ba65b;
      "
    >
      <div class="vac-chat-container pt-1">
        <div class="vac-rooms-container vac-app-border-r">
          <div class="vac-box-search">
            <div class="vac-icon-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="vac-icon-search"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                ></path>
                <!---->
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search"
              autocomplete="off"
              class="vac-input"
            />
            <div class="vac-svg-button vac-add-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="vac-icon-add"
                  d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                ></path>
                <!---->
              </svg>
            </div>
          </div>
          <!----><!---->
          <div id="rooms-list" class="vac-room-list">
            <div
              id="qYbHWlNPiTrq0CMBgFAt"
              class="vac-room-item vac-room-selected"
            >
              <div class="vac-room-container">
                <div
                  class="vac-avatar"
                  style="
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAADjCAMAAABQFUqLAAAAilBMVEX///9BuIM0SV5xyqJnd4bz+/dNvIug28FZwZPP7eDn9u9AsYE1UGC35NCJ07I2V2M3ZWc/qn4+nHo7gXHb8ujD6dis4Ml9zqo8jnXy9PWU17llxZo5c2ycprBBVGjJztQ/o3w7h3M6em44bGrm6OuFkp89lXdNYHI2XmWzusJ0gpFaa3zZ3eFrnZOT9yJ3AAAFzElEQVR42szaCVLbQBCF4e6xZOMFzGIWAbZYJIQN3P96MSSTraZcea2o532H0F/TTzIy+ChAlZjVBehjhJvIRHEPAbQWsyJglmowlfJIcU8B1IjRNoBeFHctIseKmy8CZic2VRcwp2owk72R4h4DqBaTdQA9KG4in6ZqsAyYN7FoAuheceNSvpwo7tzlK7kLmMVcccfyXTlW3GnAbCqB1QH0qLiRRJZongVQK7A3n1j+ZInmBRzNwWN5rrgT+eXSI5oFGsuNQyzHM4mM0bwZOJptAJ2ZYxmt1OA1YLphY/mkuKNS/nBLF83CI5aXEvWI5jMczQFjedMrltGVJZqL4aLZBcyrGqwk8o3mO/CY8I1lNLVEc4lGc6hYPtseE5F3NLdEsbySlJk6PC26Sv7BewBdWGIpSUT3OPjyNu/3mOgfzXs0mg1tLCOXe1zLdHlLu/OIZk0Ry1tJ4rnHNRvHy1vateJe/nM0W8/LW9os/z2u9ojlnST53uPWBDPVQflHLKeZ6qD8I1a1yRjLKP+I5ThTHbbyiGbHdHn7W/4Ra5c/lgT3ON+ZiiGaLcNM9Tuee5zv5S0t/4jlM1OVclD+Ect5pkrzv8clYpnt8hblH7GcZiqA0z2uIrq8fSEYsXxnKqpo1kSXt738I1aWmSriucfBl7deMxVdNCuCmeoHghHLd6YijGYje1vGWPre4xhmqk/5Ryyay1vOEYthpiK4x20JZiohGLEYZiqCexzV5S3biMUxUxHc4xx/EE8jGbGYLm8JDj+V88xU37i1YxuGgRgIgnAFguHMdiL1X6QaUMbj/y7ZxAGzBIwmdyzXRCxSpvKM5hGUN6THETIVwONQ8paPWAPGstvjuPL2fF/EaCYzFdfjUPK2MGKh5e35fvtHM5ip2B6HkrdFEYuaqdij2TCW3IhFyFQNHvc3y1syYs0ZS4DHVTPVjNFkjGXJ48zy1hux+JmK6HHHCzKWJY+7zPLGiVjJTCX2uDdoLGsRy5ipWKO5Xd4YEevcLm8Ej4s+iG8fzc+csaxFLGOmwowmcSxrHmeWt2DEMstbMmIZMxXB40jyFoxYxky13+NY8haMWMZM1eFxZnkLRiy1vAWfyo2ZqmM054xlKWIZM1XHaM4Zy5LHGTNVh8eZ5S0YseaMZc3jzPKWjFjGTNXgcWZ5WxexLrS8BT3OmKk6PM4sb8mIZcxUDaM5Zyzvcs0dN2IYhoKFC1kG7Go/QNykyv2PmIq7kCPTPypYcuYSA77htYjlMVM1kKbn5c0yYnnMVA32OI+ZqoU048jy2h7neXkzjFgeM1WLPc7z8ma3x/14Xt4sI5bHTNVgj3O9vBlGLI+ZqoU0PS9vhhHLY6Zqscd99oP4v0WsOLK8FrE8ZqoG0owjy2t7nOflzTJieV7eDPc4j5mqxR7neXmzi1jfHjNVA2kGkuWFiOU0U1lL0/nyZrTHBZPl2adyt5nKVJrhZHnqtAh1TGxLEyTLE3uc80xldVoEOyZ0adJkeXSPC7O8XYpYATLVEWniZHkoYoVa3k7vcUEy1U5pMmW5O2KFyVS7pEmV5Z/TAndMVKSJWt7W9ji0LIvTAnlMLKWJlqUw4Ja3YxErXKbakiZblsKIW97qzJRMpZPhshSelEylM8BlKSTa8rZrjwvxIH6GES5LoaMeEyUZLkthoi1vaxGLekyUJLYsX/S05a3OHZOpdDq2LIUbJlPpTLTlbW2PY8tSeGAylU7PlqWQscdESceWpTDglrc6CXtMLKTJlqUw4pa3OjMlU+lkuCyFJyVTbe1x8R7Ez5DYsnxHLEqm0hnhshQ66jFRknHLW52Jkqm2TgvqMVGS2LJ80dOWtzp3TKbS6diyFG645a3OFyVTbUmTLUvhgclUOj1blkLGLW91nrTlrc4Al6WQsMfEQppsWQojbnmrM1OPiZIMl6Uw0Za3tYhFyVQ6iS3Ld8SiZCqdEbe81enYshRumEylM32ALH8BfJbP09a3ElQAAAAASUVORK5CYII=');
                  "
                ></div>
                <div class="vac-name-container vac-text-ellipsis">
                  <div class="vac-title-container">
                    <!---->
                    <div class="vac-room-name vac-text-ellipsis">test</div>
                    <div class="vac-text-date">Today, 23:03</div>
                  </div>
                  <div class="vac-text-last">
                    <span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        class="vac-icon-check"
                      >
                        <path
                          id="vac-icon-double-checkmark"
                          d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"
                        ></path>
                        <!---->
                      </svg></span
                    >
                    <div class="vac-text-ellipsis">
                      
                      hello
                    </div>
                    <!---->
                    <div class="vac-room-options-container">
                      <!---->
                      <div class="vac-svg-button vac-list-room-options">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            id="vac-icon-dropdown-room"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                          ></path>
                          <!---->
                        </svg>
                      </div>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div class="vac-col-messages">
          <div class="vac-room-header vac-app-border-b">
            <div class="vac-room-wrapper">
              <!---->
              <div
                class="vac-svg-button vac-toggle-button vac-rotate-icon-init"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="vac-icon-toggle"
                    d="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z"
                  ></path>
                  <!---->
                </svg>
              </div>
              <div class="vac-info-wrapper">
                <div
                  class="vac-avatar"
                  style="
                    background-image: url('data:image/png;base64,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');
                  "
                ></div>
                <div class="vac-text-ellipsis">
                  <div class="vac-room-name vac-text-ellipsis">test</div>
                  <div class="vac-room-info vac-text-ellipsis"></div>
                </div>
              </div>
              <div class="vac-svg-button vac-room-options">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="vac-icon-menu"
                    d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                  ></path>
                  <!---->
                </svg>
              </div>
              <!---->
            </div>
          </div>
          <div id="messages-list" class="vac-container-scroll">
            <!---->
            <div class="vac-messages-container">
              <div class="">
                <div>
                  <!---->
                  <div class="vac-text-started">
                    Conversation started on: 18 May 2022
                  </div>
                </div>
                <!---->
                <span
                  ><div>
                    <div id="4nX9nuSvS0mQQg2we0ha" class="vac-message-wrapper">
                      <!----><!---->
                      <div class="vac-message-box vac-offset-current">
                        <!----><!---->
                        <div class="vac-message-container">
                          <div class="vac-message-card vac-message-current">
                            <!----><!---->
                            <div class="vac-format-message-wrapper">
                              <div class="">
                                <div class="vac-format-container">
                                  <span class=""
                                    ><!----><span>hello</span></span
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="vac-text-timestamp">
                              <!----><span>23:02</span
                              ><span
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  class="vac-icon-check"
                                >
                                  <path
                                    id="vac-icon-double-checkmark"
                                    d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"
                                  ></path>
                                  <!---->
                                </svg></span
                              >
                            </div>
                            <div class="vac-message-actions-wrapper">
                              <div
                                class="vac-options-container"
                                style="display: initial; width: 70px"
                              >
                                <span></span>
                              </div>
                              <!---->
                            </div>
                          </div>
                          <span></span>
                        </div>
                        <!----><!----><!---->
                      </div>
                      
                    </div>
                  </div>
                  <div>
                    
                  </div>
                </span>
                <span>
                    <div>
                    <div id="4nX9nuSvS0mQQg2we0ha" class="vac-message-wrapper-rev">
                      <!----><!---->
                      <div class="vac-message-box vac-offset-current">
                        <!----><!---->
                        <div class="vac-message-container">
                          <div class="vac-message-card vac-message-current">
                            <!----><!---->
                            <div class="vac-format-message-wrapper">
                              <div class="">
                                <div class="vac-format-container">
                                  <span class=""
                                    ><!----><span>hello</span></span
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="vac-text-timestamp">
                              <!----><span>23:02</span
                              ><span
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  class="vac-icon-check"
                                >
                                  <path
                                    id="vac-icon-double-checkmark"
                                    d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"
                                  ></path>
                                  <!---->
                                </svg></span
                              >
                            </div>
                            <div class="vac-message-actions-wrapper">
                              <div
                                class="vac-options-container"
                                style="display: initial; width: 70px"
                              >
                                <span></span>
                              </div>
                              <!---->
                            </div>
                          </div>
                          <span></span>
                        </div>
                        <!----><!----><!---->
                      </div>
                      
                    </div>
                  </div>
                  <div>
                    
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div><!----></div>
          <div id="room-footer" class="vac-room-footer" style="">
            <!----><!----><!----><!----><!---->
            <div class="vac-box-footer vac-box-footer-border">
              <div class="vac-icon-textarea-left">
                <div class="vac-svg-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    class="vac-icon-microphone"
                  >
                    <path
                      id="vac-icon-microphone"
                      d="M432.8,216.4v39.2c0,45.2-15.3,84.3-45.2,118.4c-29.8,33.2-67.3,52.8-111.6,57.9v40.9h78.4c5.1,0,10.2,1.7,13.6,6c4.3,4.3,6,8.5,6,13.6c0,5.1-1.7,10.2-6,13.6c-4.3,4.3-8.5,6-13.6,6H157.6c-5.1,0-10.2-1.7-13.6-6c-4.3-4.3-6-8.5-6-13.6c0-5.1,1.7-10.2,6-13.6c4.3-4.3,8.5-6,13.6-6H236v-40.9c-44.3-5.1-81.8-23.9-111.6-57.9s-45.2-73.3-45.2-118.4v-39.2c0-5.1,1.7-10.2,6-13.6c4.3-4.3,8.5-6,13.6-6s10.2,1.7,13.6,6c4.3,4.3,6,8.5,6,13.6v39.2c0,37.5,13.6,70.7,40,97.1s59.6,40,97.1,40s70.7-13.6,97.1-40c26.4-26.4,40-59.6,40-97.1v-39.2c0-5.1,1.7-10.2,6-13.6c4.3-4.3,8.5-6,13.6-6c5.1,0,10.2,1.7,13.6,6C430.2,206.2,432.8,211.3,432.8,216.4z M353.5,98v157.6c0,27.3-9.4,50.3-29,69c-19.6,19.6-42.6,29-69,29s-50.3-9.4-69-29c-19.6-19.6-29-42.6-29-69V98c0-27.3,9.4-50.3,29-69c19.6-19.6,42.6-29,69-29s50.3,9.4,69,29C344.2,47.7,353.5,71.6,353.5,98z"
                    ></path>
                    <!---->
                  </svg>
                </div>
              </div>
              <textarea
                id="roomTextarea"
                placeholder="Type message"
                class="vac-textarea"
                style="min-height: 20px; padding-left: 12px; height: 20px"
              ></textarea>
              <div class="vac-icon-textarea">
                <!---->
                <div>
                  <div class="vac-emoji-wrapper">
                    <div class="vac-svg-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="vac-icon-emoji"
                          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                        ></path>
                        <!---->
                      </svg>
                    </div>
                    <!---->
                  </div>
                </div>
                <div class="vac-svg-button">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="vac-icon-paperclip"
                      d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"
                    ></path>
                    <!---->
                  </svg>
                </div>
                <!----><input type="file" accept="*" style="display: none" />
                <div class="vac-svg-button vac-send-disabled">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="vac-icon-send-disabled"
                      d="M2,21L23,12L2,3V10L17,12L2,14V21Z"
                    ></path>
                    <!---->
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<style>
.window-container[data-v-10060cf4] {
    width: 100%;
}
.vac-card-window {
    width: 100%;
    display: block;
    max-width: 100%;
    background: var(--chat-content-bg-color);
    color: var(--chat-color);
    overflow-wrap: break-word;
    white-space: normal;
    border: var(--chat-container-border);
    border-radius: var(--chat-container-border-radius);
    box-shadow: var(--chat-container-box-shadow);
    -webkit-tap-highlight-color: transparent;
}
.vac-card-window .vac-chat-container {
    height: 100%;
    display: flex;
}
.vac-app-border-r {
    border-right: var(--chat-border-style);
}
.vac-rooms-container {
    display: flex;
    flex-flow: column;
    flex: 0 0 25%;
    min-width: 260px;
    max-width: 500px;
    position: relative;
    background: var(--chat-sidemenu-bg-color);
    height: 100%;
    border-top-left-radius: var(--chat-container-border-radius);
    border-bottom-left-radius: var(--chat-container-border-radius);
}
.vac-box-search {
    position: -webkit-sticky;
    position: sticky;
    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 15px;
}
.vac-box-search .vac-icon-search {
    display: flex;
    position: absolute;
    left: 30px;
}
.vac-card-window .vac-chat-container input[type=search], .vac-card-window .vac-chat-container input[type=text], .vac-card-window .vac-chat-container textarea {
    -webkit-appearance: none;
}
.vac-card-window .vac-chat-container input {
    min-width: 10px;
}

.vac-box-search .vac-input {
    height: 38px;
    width: 100%;
    background: var(--chat-bg-color-input);
    color: var(--chat-color);
    border-radius: 4px;
    font-size: 15px;
    outline: 0;
    caret-color: var(--chat-color-caret);
    padding: 10px 10px 10px 40px;
    border: 1px solid var(--chat-sidemenu-border-color-search);
    border-radius: 20px;
}
.vac-svg-button {
    max-height: 30px;
    display: flex;
    cursor: pointer;
    transition: all .2s;
}
.vac-box-search .vac-add-icon {
    margin-left: auto;
    padding-left: 10px;
}
#vac-icon-add {
    fill: var(--chat-icon-color-add);
}
.vac-rooms-container .vac-room-list {
    flex: 1;
    position: relative;
    max-width: 100%;
    cursor: pointer;
    padding: 0 10px 5px;
    overflow-y: auto;
}
.vac-rooms-container .vac-room-selected, .vac-rooms-container .vac-room-selected:hover {
    background: var(--chat-sidemenu-bg-color-active)!important;
}

.vac-rooms-container .vac-room-selected {
    color: var(--chat-sidemenu-color-active)!important;
}
.vac-rooms-container .vac-room-item {
    border-radius: 8px;
    align-items: center;
    display: flex;
    flex: 1 1 100%;
    margin-bottom: 5px;
    padding: 0 14px;
    position: relative;
    min-height: 71px;
    transition: background-color .3s cubic-bezier(.25,.8,.5,1);
}
.vac-room-container {
    display: flex;
    flex: 1;
    align-items: center;
    width: 100%;
}
.vac-avatar {
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ddd;
    height: 42px;
    width: 42px;
    min-height: 42px;
    min-width: 42px;
    margin-right: 15px;
    border-radius: 50%;
}
.vac-rooms-container .vac-room-selected {
    color: var(--chat-sidemenu-color-active)!important;
}
.vac-text-ellipsis {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.vac-room-container .vac-name-container {
    flex: 1;
}
.vac-room-container .vac-title-container {
    display: flex;
    align-items: center;
    line-height: 25px;
}
.vac-room-container .vac-room-name {
    flex: 1;
    color: var(--chat-room-color-username);
    font-weight: 500;
}
.vac-room-container .vac-text-date {
    margin-left: 5px;
    font-size: 11px;
    color: var(--chat-room-color-timestamp);
}
.vac-room-container .vac-text-last {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 19px;
    color: var(--chat-room-color-message);
}
.vac-room-container .vac-icon-check {
    display: flex;
    vertical-align: middle;
    height: 14px;
    width: 14px;
    margin-top: -2px;
    margin-right: 2px;
}
#vac-icon-checkmark, #vac-icon-double-checkmark {
    fill: var(--chat-icon-color-checkmark);
}
.vac-room-container .vac-icon-microphone {
    height: 15px;
    width: 15px;
    vertical-align: middle;
    margin: -3px 1px 0 -2px;
    fill: var(--chat-room-color-message);
}
.vac-room-container .vac-room-options-container {
    display: flex;
    margin-left: auto;
}
.vac-room-container .vac-list-room-options {
    height: 19px;
    width: 19px;
    align-items: center;
    margin-left: 5px;
}
.vac-svg-button {
    max-height: 30px;
    display: flex;
    cursor: pointer;
    transition: all .2s;
}



.vac-col-messages {
    position: relative;
    height: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-flow: column;
}
.vac-room-header {
    position: absolute;
    display: flex;
    align-items: center;
    height: 64px;
    width: 100%;
    z-index: 10;
    margin-right: 1px;
    background: var(--chat-header-bg-color);
    border-top-right-radius: var(--chat-container-border-radius);
}
.vac-room-header .vac-room-wrapper {
    display: flex;
    align-items: center;
    min-width: 0;
    height: 100%;
    width: 100%;
    padding: 0 16px;
}
.vac-room-header .vac-rotate-icon-init {
    transform: rotate(1turn);
}
.vac-room-header .vac-toggle-button {
    margin-right: 15px;
}
.vac-svg-button {
    max-height: 30px;
    display: flex;
    cursor: pointer;
    transition: all .2s;
}
.vac-room-header .vac-toggle-button svg {
    height: 26px;
    width: 26px;
}
#vac-icon-toggle {
    fill: var(--chat-icon-color-toggle);
}
.vac-room-header .vac-info-wrapper, .vac-room-header .vac-room-selection {
    display: flex;
    align-items: center;
    min-width: 0;
    width: 100%;
    height: 100%;
}
.vac-room-header .vac-room-name {
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
    color: var(--chat-header-color-name);
}
.vac-room-header .vac-room-options {
    margin-left: auto;
}
.vac-col-messages .vac-container-scroll {
    background: var(--chat-content-bg-color);
    flex: 1;
    overflow-y: auto;
    margin-right: 1px;
    margin-top: 60px;
    -webkit-overflow-scrolling: touch;
}
.vac-col-messages .vac-messages-container {
    padding: 0 5px 5px;
}
.vac-col-messages .vac-text-started {
    font-size: 14px;
    color: var(--chat-message-color-started);
    font-style: italic;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
}
.vac-message-wrapper .vac-offset-current {
    margin-left: 50%;
    justify-content: flex-end;
}
.vac-message-wrapper .vac-message-box {
    display: flex;
    flex: 0 0 50%;
    max-width: 50%;
    /* justify-content: flex-start; */
    line-height: 1.4;
}
.vac-message-wrapper .vac-message-container {
    position: relative;
    padding: 2px 10px;
    align-items: end;
    min-width: 100px;
    box-sizing: content-box;
}
.vac-message-wrapper .vac-message-current {
    background-color: var(--chat-message-bg-color-me)!important;
}
.vac-message-wrapper .vac-message-card {
    background-color: var(--chat-message-bg-color);
    color: var(--chat-message-color);
    border-radius: 8px;
    font-size: 14px;
    padding: 6px 9px 3px;
    white-space: pre-line;
    max-width: 100%;
    transition-property: box-shadow,opacity;
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow;
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 10%), 0 1px 1px -1px rgb(0 0 0 / 11%), 0 1px 2px -1px rgb(0 0 0 / 11%);
}
.vac-format-message-wrapper .vac-format-container {
    display: inline;
}
.vac-message-wrapper .vac-text-timestamp {
    font-size: 10px;
    color: var(--chat-message-color-timestamp);
    text-align: right;
}
.vac-message-wrapper .vac-icon-check {
    height: 14px;
    width: 14px;
    vertical-align: middle;
    margin: -3px -3px 0 3px;
}
.vac-message-actions-wrapper .vac-options-container {
    position: absolute;
    top: 2px;
    right: 10px;
    height: 40px;
    width: 70px;
    overflow: hidden;
    border-top-right-radius: 8px;
}
.vac-room-footer {
    width: 100%;
    border-bottom-right-radius: 4px;
    z-index: 10;
}
.vac-box-footer {
    display: flex;
    position: relative;
    background: var(--chat-footer-bg-color);
    padding: 10px 8px 10px;
}
.vac-icon-textarea-left {
    display: flex;
    align-items: center;
    margin-right: 5px;
}
.vac-icon-textarea, .vac-icon-textarea-left {
    display: flex;
    align-items: center;
}
.vac-icon-textarea-left .vac-icon-microphone {
    fill: var(--chat-icon-color-microphone);
    margin: 0 7px;
}
vac-card-window .vac-chat-container input[type=search], .vac-card-window .vac-chat-container input[type=text], .vac-card-window .vac-chat-container textarea {
    -webkit-appearance: none;
}

.vac-textarea {
    height: 20px;
    width: 100%;
    line-height: 20px;
    overflow: hidden;
    outline: 0;
    resize: none;
    border-radius: 20px;
    padding: 12px 16px;
    box-sizing: content-box;
    font-size: 16px;
    background: var(--chat-bg-color-input);
    color: var(--chat-color);
    caret-color: var(--chat-color-caret);
    border: var(--chat-border-style-input);
}
.vac-icon-textarea {
    margin-left: 5px;
}
.vac-icon-textarea, .vac-icon-textarea-left {
    display: flex;
    align-items: center;
}
.vac-emoji-wrapper {
    position: relative;
    display: flex;
}
.vac-icon-textarea-left .vac-wrapper, .vac-icon-textarea-left svg, .vac-icon-textarea .vac-wrapper, .vac-icon-textarea svg {
    margin: 0 7px;
}
.vac-card-window .vac-chat-container input {
    min-width: 10px;
}
.vac-send-disabled, .vac-send-disabled svg {
    cursor: none!important;
    pointer-events: none!important;
    transform: none!important;
}

.vac-message-wrapper-rev .vac-message-box {
    display: flex !important;
    flex: 0 0 50%;
    max-width: 50%;
    justify-content: flex-start !important;
    line-height: 1.4;
}


.vac-message-wrapper-rev .vac-offset-current {
    
    justify-content: flex-end;
}
.vac-message-wrapper-rev .vac-text-timestamp {
    font-size: 10px;
    color: var(--chat-message-color-timestamp);
    text-align: right;
}
.vac-message-wrapper-rev .vac-icon-check {
    height: 14px;
    width: 14px;
    vertical-align: middle;
    margin: -3px -3px 0 3px;
}

.vac-message-wrapper-rev .vac-message-container {
    position: relative;
    padding: 2px 10px;
    align-items: end;
    min-width: 100px;
    box-sizing: content-box;
}
/* .vac-message-wrapper-rev .vac-message-current {
    background-color: var(--chat-message-bg-color-me)!important;
} */
.vac-message-wrapper-rev .vac-message-card {
    background-color: var(--chat-message-bg-color);
    color: var(--chat-message-color);
    border-radius: 8px;
    font-size: 14px;
    padding: 6px 9px 3px;
    white-space: pre-line;
    max-width: 100%;
    transition-property: box-shadow,opacity;
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow;
    box-shadow: 0 1px 1px 1px rgb(0 0 0 / 10%), 0 1px 1px -1px rgb(0 0 0 / 11%), 0 1px 2px -1px rgb(0 0 0 / 11%);
}
@media screen and (max-width: 640px) {
    .vac-col-messages{
        display: none;
    }
    .vac-rooms-container{
        flex: none;
        width: 100%;
        max-width: none;
    }
}
</style>