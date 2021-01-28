class Business {
  constructor({room, media, view}) {
    this.room = room
    this.media = media
    this.view = view

    this.currentStream = {}; // Enquanto a câmera estiver ativa ela receberá os dados atualizados
  }

  /**
   * Metodo estático para instância com as dependencias
   */
  static initialize(deps) {
    const instance = new Business(deps);
    return instance._init();
  }

  async _init(){
    this.currentStream = await this.media.getCamera();
    this.addVideoStream('teste01');
    // console.log('Iniciando', this.currentStream);
  }

  addVideoStream(userId, stream = this.currentStream){
    const isCurrentId = false;

    this.view.renderVideo({
      userId,
      stream
    }) // Chama a classe viu que renderiza o vídeo no HTML (PADRÃO RESPONSABILIDADE ÚNICA)
  }
}