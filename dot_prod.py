def dot_product(v1, v2):
    n = len(v1)
    ps = 0
    for i in range(n):
        ps += v1[i] * v2[i]
    return ps
def check_orthogonality(vectors):
    n = len(vectors)
    results = []
    for i in range(n):
        v1 = vectors[i][0]
        v2 = vectors[i][1]
        dp = dot_product(v1, v2)
        if dp == 0:
            results.append(True)
        else:
            results.append(False)
    return results

def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        j = i-1
        while j >= 0 and arr[j+1] < arr[j]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            j -= 1
    return arr