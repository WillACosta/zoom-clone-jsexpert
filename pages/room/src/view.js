class View {
  constructor() {}

  createVideoElement({
    muted = true,
    src,
    srcObject
  }) {
    const video = document.createElement('video');
    video.muted = muted;
    video.src = src;

    if (src) { // Se for um link de vídeo
      video.controls = true;
      video.loop = true;
      Util.sleep(200).then(_ => video.play())
    }

    if (srcObject) video.addEventListener('loadmetadata', _ => video.play());

    return video;
  }

  /**
   * Cria um novo vídeo independente da origm (URL, Stream)
   * @param {*} param0
   */
  renderVideo({
    userId,
    stream = null,
    url = null,
    isCurrentId = false
  }) {
    const video = this.createVideoElement({
      src: url,
      srcObject: stream
    });

    this.appendToHTMLTree(userId, video, isCurrentId)
  }

  /**
   * Manipula o DOM para inserção dos vídeos
   * @param {*} userId
   * @param {*} video
   * @param {*} isCurrentId
   */
  appendToHTMLTree(userId, video, isCurrentId) {
    const div = document.createElement('div');
    div.id = userId;
    div.classList.add('wrapper');
    div.append(video);

    const div2 = document.createElement('div');
    div2.innerText = isCurrentId ? '' : userId; // Mostrar identificador do usuário se não for o próprio
    div.append(div2);

    const videoGrid = document.getElementById('video-grid');
    videoGrid.append(div);
  }

}