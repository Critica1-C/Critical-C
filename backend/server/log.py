import logging
import logging.handlers
from logging import root
import json
from datetime import datetime


logger = logging.getLogger("app")
logger.setLevel(logging.DEBUG)

json_handler = logging.handlers.TimedRotatingFileHandler(
    filename=f"/logtest/kinesis.log",
    interval=24,
    when="H",  
    backupCount=1,
)

class JsonFormatter(logging.Formatter):
    # def formatException(self, exc_info):
    #     exc_info.message = exc_info.message.replace('"','')
    #     result = super(JsonFormatter, self).formatException(exc_info)
    #     json_result = {
    #     "timestamp": f"{datetime.now()}",
    #     "level": "ERROR",
    #     "logger": "app",
    #     "message": f"{result}",
    #     }

    #     return json.dumps(json_result)

    def format(self, record):
    # 기본 포맷터를 이용해서 메시지를 생성합니다.
        message = super(JsonFormatter, self).format(record)

    # 메시지를 JSON 객체로 변환합니다.
        log_record = {
        "timestamp": datetime.now().strftime('%Y-%m-%d %H:%M:%S,%f')[:-3],
        "level": record.levelname,
        "logger": record.module,
        "message": message
        }

    # JSON 객체를 문자열로 직렬화합니다.
        return json.dumps(log_record)


# json_formatter = JsonFormatter(
# '{"timestamp":"%(asctime)s", "level":"%(levelname)s", "logger":"%(module)s", "message":"%(message)s"}'
# )

# Formatter 설정
json_formatter = JsonFormatter('%(message)s')


json_handler.setFormatter(json_formatter)
root.addHandler(json_handler)

console_handler = logging.StreamHandler()
console_formatter = logging.Formatter(
"[%(asctime)s] - %(name)s - %(levelname)s - %(message)s"
)

console_handler.setFormatter(console_formatter)
root.addHandler(console_handler)

json_handler.close()