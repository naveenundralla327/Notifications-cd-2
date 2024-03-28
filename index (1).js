const Notification = (props) => {
  //  Write your code here.
  const { className, imageUrl, notifyMessage } = props;
  const messageClassName = `notification-container ${className}`


  return (
    <div className={messageClassName}>
      <img className="image-icon" src={imageUrl} />
      <p className="notifyMessage">{notifyMessage}</p>
  );
};

const element = (
  <div className="notifications-full-container">
    <h1 className="Description">Notifications</h1>
    <div className="notification-list-container"></div>
      <Notification
        className="primary-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notifyMessage="Information Message"
      />
      <Notification
        className="success-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notifyMessage="Success Message"
      />
      <Notification
        className="warning-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notifyMessage="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notifyMessage="Error Message"
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));

