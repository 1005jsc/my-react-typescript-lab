class SseService {
  readonly userId: string = '';
  readonly subject: string = '';

  constructor(userId: string, subject: string) {
    this.userId = userId;
    this.subject = subject;
  }

  private eventSource = new EventSource(`url 임${this.subject}  `);
}

export default SseService;
