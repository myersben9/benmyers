from sqlalchemy.orm import Session

from . import models, schemas


def get_keys_raw(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Keys).offset(skip).limit(limit).all()

def get_keys(db: Session) -> models.KeyLists:
        """
            Get the key data from NocoDB

            Returns:
                KeyObject: An object containing the key data
            
            Raises:
                Exception: If there is an error getting the key data
            
        """
        try:
            data = get_keys_raw(db, skip=0, limit=100)
            key_data = models.KeyLists(
                envvars=[item.envvar for item in data],
                envvals=[item.envval for item in data],
            )
            return key_data
        except:
            raise