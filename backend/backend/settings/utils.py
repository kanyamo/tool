# 環境変数読み込みに便利な関数を定義する

def str_to_bool(s: str):
    s = s.lower()
    return s in ["true", "t", "1", "on", "y", "yes"]
