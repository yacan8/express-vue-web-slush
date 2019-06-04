export default class BaseService {
  success(message, data = null) {
    return {
      success: true,
      message,
      data
    }
  }

  fail(message, data = null, err) {
    if (err) {
      console.error(err);
    }
    return {
      success: false,
      message,
      data
    }
  }
}