const BoxChat = ({ top = true, msg }) => {
  return top ? (
    <div id='top'>
      <div id='box-chat'>{msg}</div>
      <div id='big-circle' />
      <div id='middle-circle' />
      <div id='small-circle' />
    </div>
  ) : (
    <div id='bottom'>
      <div id='small-circle' />
      <div id='middle-circle' />
      <div id='big-circle' />
      <div id='box-chat'>{msg}</div>
    </div>
  );
};

export default BoxChat;
