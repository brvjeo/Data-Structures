#ifndef Structure_hpp
#define Structure_hpp

#include <stdio.h>

namespace DataStructures {
template<typename T>class Structure {
protected:
    virtual T get(int index) = 0;
    virtual T pull(int index) = 0;
    virtual void insert(int index,T value) = 0;
    virtual int getLength() = 0;
};
};
#endif
